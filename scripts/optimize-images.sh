#!/bin/bash
# Image Optimization Script for QRegu Website
# Converts PNG to WebP and creates responsive srcset images

set -e

IMAGES_DIR="../images"
OUTPUT_DIR="../images/optimized"

echo "🖼️  QRegu Image Optimization Script"
echo "===================================="

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "⚠️  cwebp not found. Installing via Homebrew..."
    echo "   Run: brew install webp"
    echo ""
    echo "Alternatively, use online tools:"
    echo "   - https://squoosh.app (Google's image optimizer)"
    echo "   - https://tinypng.com (PNG compression)"
    exit 1
fi

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Convert all PNG files to WebP
echo ""
echo "Converting PNG to WebP..."
for file in "$IMAGES_DIR"/*.png; do
    if [ -f "$file" ]; then
        filename=$(basename "$file" .png)
        echo "  Converting: $filename.png"

        # High quality WebP (90%)
        cwebp -q 90 "$file" -o "$OUTPUT_DIR/$filename.webp"

        # Create responsive versions
        # Mobile (400px)
        cwebp -q 85 -resize 400 0 "$file" -o "$OUTPUT_DIR/${filename}-400.webp"
        # Tablet (800px)
        cwebp -q 85 -resize 800 0 "$file" -o "$OUTPUT_DIR/${filename}-800.webp"
        # Desktop (1200px)
        cwebp -q 90 -resize 1200 0 "$file" -o "$OUTPUT_DIR/${filename}-1200.webp"
    fi
done

echo ""
echo "✅ Optimization complete!"
echo ""

# Show file size comparison
echo "📊 File Size Comparison:"
echo "------------------------"
for file in "$IMAGES_DIR"/*.png; do
    if [ -f "$file" ]; then
        filename=$(basename "$file" .png)
        original_size=$(ls -lh "$file" | awk '{print $5}')
        if [ -f "$OUTPUT_DIR/$filename.webp" ]; then
            webp_size=$(ls -lh "$OUTPUT_DIR/$filename.webp" | awk '{print $5}')
            echo "  $filename: $original_size → $webp_size"
        fi
    fi
done

echo ""
echo "📁 Output directory: $OUTPUT_DIR"
echo ""
echo "Next steps:"
echo "1. Update HTML to use WebP with PNG fallback:"
echo '   <picture>'
echo '     <source srcset="images/optimized/logo.webp" type="image/webp">'
echo '     <img src="images/logo.png" alt="QRegu logo">'
echo '   </picture>'
echo ""
echo "2. For responsive images:"
echo '   <img srcset="images/optimized/impact-list-400.webp 400w,'
echo '               images/optimized/impact-list-800.webp 800w,'
echo '               images/optimized/impact-list-1200.webp 1200w"'
echo '        sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"'
echo '        src="images/impact-list.png" alt="Impact Reports">'