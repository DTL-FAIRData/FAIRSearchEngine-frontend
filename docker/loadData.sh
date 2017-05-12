#!/bin/bash
curl -s -XPUT localhost:9200/dataset --data-binary "@mapping.es"
curl -s -XPOST localhost:9200/_bulk --data-binary "@exampleDataset.es"
