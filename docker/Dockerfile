############################################################
# Dockerfile to run ...
# Based on Ubuntu Image
# FAIR
############################################################

FROM ubuntu

MAINTAINER fair

#set some env variables
RUN sysctl -w vm.max_map_count=262144
RUN echo "vm.max_map_count=262144" >> /etc/sysctl.conf

# Update the default application repository sources list and install default packages
RUN apt-get update
RUN apt-get install -y apache2
RUN apt-get install -y php7.0
RUN apt-get install -y libapache2-mod-php7.0

# prepare utils
RUN apt-get update
RUN apt-get install -y software-properties-common
RUN apt-get install -y git
RUN apt-get install -y curl

# add java
RUN echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | debconf-set-selections 
RUN apt-add-repository ppa:webupd8team/java
RUN apt-get update
RUN apt-get install -y oracle-java8-installer
RUN rm -rf /var/lib/apt/lists/*
RUN rm -rf /var/cache/oracle-jdk8-installer

# add elastic search repo, update and install
#RUN wget -qO - https://packages.elastic.co/GPG-KEY-elasticsearch | apt-key add -
ADD https://packages.elastic.co/GPG-KEY-elasticsearch /root/
RUN cat /root/GPG-KEY-elasticsearch | apt-key add -
RUN echo "deb http://packages.elastic.co/elasticsearch/2.x/debian stable main" |  tee -a /etc/apt/sources.list.d/elasticsearch-2.x.list
RUN apt-get update
RUN apt-get install elasticsearch

#config docker
RUN echo "network.host: 0.0.0.0" > /etc/elasticsearch/elasticsearch.yml
RUN echo "http.cors.enabled : true" >> /etc/elasticsearch/elasticsearch.yml
RUN echo 'http.cors.allow-origin : "*"' >> /etc/elasticsearch/elasticsearch.yml
RUN echo "http.cors.allow-methods : OPTIONS, HEAD, GET, POST, PUT, DELETE" >> /etc/elasticsearch/elasticsearch.yml
RUN echo "http.cors.allow-headers : X-Requested-With,X-Auth-Token,Content-Type, Content-Length" >> /etc/elasticsearch/elasticsearch.yml

RUN rm -f /var/www/html/index.html

# clone repo for frontend
RUN git clone https://github.com/DTL-FAIRData/FAIRSearchEngine-frontend.git /var/www/html/

volume /var/lib/elasticsearch/

# populate with example dataset
COPY mapping.es /root/
COPY exampleDataset.es /root/
COPY loadData.sh /root/

#install
COPY www/* /var/www/html/submit/

EXPOSE 80 9200 

#ENTRYPOINT service elasticsearch restart && service apache2 restart && curl -s -XPOST localhost:9200/_bulk --data-binary "@/root/exampleDataset.es"; echo && bash
ENTRYPOINT service elasticsearch restart && service apache2 restart && curl -s -XPOST localhost:9200/_bulk --data-binary "@/root/exampleDataset.es"; echo && bash
