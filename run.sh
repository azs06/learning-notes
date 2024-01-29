#!/bin/bash

# Iterate through each file in the directory
for file in *; do
  # Check if the item is a file
  if [ -f "$file" ]; then
    # Extract the file name without the extension
    filename="${file%.*}"

    # Create a folder based on the file name
    mkdir -p "$filename"

    # Move the file to the corresponding folder
    mv "$file" "$filename/"
  fi
done