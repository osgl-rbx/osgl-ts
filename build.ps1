$OSGL_DIR = "osgl"
$SRC_DIR = "src"
$OSGL_SRC_DIR = "$OSGL_DIR/src"

if (!(Test-Path $OSGL_DIR)) {
    git clone https://github.com/osgl-rbx/osgl
}

if (Test-Path $OSGL_SRC_DIR) {
    if (!(Test-Path $SRC_DIR)) {
        New-Item -ItemType Directory -Path $SRC_DIR | Out-Null
    }

    Copy-Item -Path "$OSGL_SRC_DIR\*" -Destination $SRC_DIR -Recurse -Force
}

Remove-Item -Path ".\out" -Recurse -Force

npm run build
npm pack

Get-ChildItem -Path $SRC_DIR -Recurse |
    Where-Object { $_.Extension -eq ".luau" -or $_.Extension -eq ".toml" } |
    Remove-Item -Force

Get-ChildItem -Path $SRC_DIR -Recurse -Directory |
    Where-Object { !(Get-ChildItem -Path $_.FullName -Recurse) } |
    Remove-Item -Force

Write-Host "Build completed."
