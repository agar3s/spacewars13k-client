#!/bin/bash
echo "// compressing"

cd target;
zip -r ../target.zip .;
cd ..;
advzip target.zip -z -4 -i 100;
#wc -c target.zip;
FILESIZE=$(stat -c%s "target.zip")
echo "0.$(($FILESIZE*10000/(13*1024)))"