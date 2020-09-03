# How to find all file extensions recursively from a directory?

`find . -type f -name '*.*' | sed 's|.*\.||' | sort -u`
