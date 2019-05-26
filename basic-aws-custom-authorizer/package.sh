#!/bin/bash

mkdir package
cd package
pip install PyJWT --target .
zip -r9 ../handler.zip .
cd ../
zip -g handler.zip src/*