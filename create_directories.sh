#!/bin/bash

# Loop through all .ts files in the current directory
for file in *.ts; do
  # Extract lines with paths (assuming comments start with "// ")
  grep '// src/' "$file" | while read -r line; do
    # Extract the path from the comment by removing "// " and the file name
    line=$(echo "$line" | sed 's|// ||' | sed 's|/[^/]*\.ts||')
    # Create the directory structure if it doesn't exist
    mkdir -p "$line"
  done
done

