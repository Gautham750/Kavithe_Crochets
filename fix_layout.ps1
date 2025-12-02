# Read the CSS file
$content = Get-Content "style.css" -Raw

# Find where to insert (after .back-btn rule)
$insertAfter = @"
.back-btn {
    align-self: flex-start;
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--color-black);
}
"@

$newCSS = @"
.back-btn {
    align-self: flex-start;
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--color-sage);
}

.details-container {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    gap: 60px;
    padding-bottom: 60px;
}

.details-image-gallery {
    flex: 1.5;
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    border-radius: 8px;
    background-color: #f0f0f0;
}

.details-image-gallery::-webkit-scrollbar {
    display: none;
}

.details-image-gallery .detail-slider-image {
    min-width: 100%;
    aspect-ratio: 3/4;
    scroll-snap-align: start;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6rem;
    background-color: #f0f0f0;
}

.details-info {
    flex: 1;
    position: sticky;
    top: 40px;
    height: fit-content;
    padding-top: 20px;
}

.details-info h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: 400;
    color: var(--color-black);
}
"@

$content = $content -replace [regex]::Escape($insertAfter), $newCSS

# Write back
Set-Content "style.css" -Value $content -NoNewline

Write-Output "CSS updated successfully!"
"@
