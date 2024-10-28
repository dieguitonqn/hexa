#!/bin/bash
i=1
for f in *.jpeg; do
    mv "$f" "hexa-foto-$i.jpeg"
    ((i++))
done
