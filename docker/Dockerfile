############################################################
# Dockerfile to run Memcached Containers
# Based on Ubuntu Image
# FAIR
############################################################

FROM ubuntu

MAINTAINER fair


# Update the default application repository sources list and install default packages
RUN apt-get update
RUN apt-get install -y apache2

# prepare utils
RUN apt-get install -y software-properties-common
RUN apt-get install -y git

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

RUN rm -f /var/www/html/index.html

# clone repo for frontend
RUN git clone https://github.com/DTL-FAIRData/FAIRSearchEngine-frontend.git /var/www/html/

volume /var/lib/elasticsearch/

EXPOSE 80 9200 

ENTRYPOINT service elasticsearch restart && service apache2 restart && bash

