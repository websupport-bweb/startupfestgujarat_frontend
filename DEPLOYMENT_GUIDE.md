# cPanel Deployment Guide for Startup Fest Gujarat

## 📋 Deployment Steps

### 1. Build the Application
```bash
npm run build:prod
```

### 2. Upload Files to cPanel
1. **Login to your cPanel**
2. **Go to File Manager**
3. **Navigate to public_html directory** (or your domain's folder)
4. **Upload all files from the `build` folder** to your domain directory
5. **Extract if uploaded as ZIP**

### 3. Files to Upload
Upload everything from the `build` folder:
- `index.html`
- `manifest.json`
- `robots.txt`
- `sw.js`
- `.htaccess` (created automatically)
- `static/` folder (contains CSS, JS, and media files)

### 4. Important Notes

#### Domain Configuration
- If deploying to a **main domain** (e.g., startupfestgujarat.com):
  - Upload files directly to `public_html/`
  
- If deploying to a **subdomain** (e.g., app.startupfestgujarat.com):
  - Upload files to `public_html/app/` or the subdomain's folder

#### .htaccess File
The `.htaccess` file is automatically created in the build folder and includes:
- ✅ React Router support (SPA routing)
- ✅ GZIP compression for better performance
- ✅ Cache control for static assets
- ✅ Security headers
- ✅ 404 error handling

### 5. Verification Steps
After deployment:
1. Visit your domain
2. Test navigation (all routes should work)
3. Check browser console for errors
4. Test external registration redirect

### 6. Troubleshooting

#### Common Issues:
- **404 errors on refresh**: Ensure `.htaccess` is uploaded and mod_rewrite is enabled
- **CSS/JS not loading**: Check file paths and case sensitivity
- **Images not showing**: Verify all files in `static/` folder are uploaded

#### Performance Tips:
- ✅ GZIP compression enabled via `.htaccess`
- ✅ Browser caching configured
- ✅ Optimized bundle sizes
- ✅ Lazy loading implemented

### 7. File Structure After Upload
```
public_html/
├── index.html
├── manifest.json
├── robots.txt
├── sw.js
├── .htaccess
└── static/
    ├── css/
    ├── js/
    └── media/
```

### 8. Build Commands Reference
- `npm run build:prod` - Production build without bundle analyzer
- `npm run build` - Development build with analyzer (may show warnings)
- `npm run serve` - Test build locally before deployment

## 🚀 Your website will be live at your domain after successful upload!