#!/bin/bash
rm *.gadget
zip -r -1 CheckTable.gadget . -i LICENSE README.md gadget.xml main.css main.html main.js settings.html
