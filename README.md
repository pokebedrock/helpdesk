# PokéBedrock Helpdesk 🎙️  

Welcome to the **PokéBedrock Helpdesk** repository! This is where all support documentation for PokéBedrock is maintained. Anyone—whether you're a staff member or a community member—can contribute to improving the helpdesk.  

## 📖 How to Contribute  

You can help by adding new pages, updating existing ones, or improving translations. Contributions are made via **pull requests**.  

### 📝 Creating a New Helpdesk Page  

1. **Create a pull request** following [this guide](https://docs.github.com/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).  
2. **Add a new Markdown file** to the appropriate language folder inside `docs/`:  
   - English: `docs/en/your-page.md`  
   - Portuguese: `docs/pt/your-page.md`  
   - Spanish: `docs/es/your-page.md`  
3. The file name **must match the article title** (use hyphens instead of spaces). Example:  
   ```md
   # Applying for Staff  
   (Article content here...)
   ```  
   - File name: `applying-for-staff.md`  
4. Follow the formatting style used in other helpdesk articles. You can refer to the [Markdown guide](https://vitepress.dev/guide/markdown) for help.  
5. **Submit your pull request** for review by an admin.  

**Note to Admins:** Once approved, update `index.md` and ensure the new page is properly linked in the navigation files.  

### 🔄 Updating an Existing Helpdesk Page  

- Click the **edit button** on the page you want to modify.  
- Make your changes and submit them as a pull request.  

## 📚 Helpdesk Structure  

```
docs/  
│── assets/      # Shared images and media files  
│── en/          # English articles  
│── es/          # Spanish articles  
│── pt/          # Portuguese articles  
│── index.md     # Main helpdesk index  
│── <config file> # Navigation & sidebar settings (check repo for exact location)
```

## 🛠️ Formatting & Style Guidelines  

- **UK English** spelling must be used.  
- **Titles**: Capitalize important words (`Applying for Staff` ✅ `applying for staff` ❌).  
- **Use `&` instead of `and`** in headings when possible (`Ranks & Rewards`).  
- **File names and titles must match** (`# Applying for Staff` → `applying-for-staff.md`).  
- **Lists** should not have full stops at the end, but **info boxes must**.  
- **Hyperlinks** should be properly formatted:  
  ```md
  [pokebedrock.com/support](https://pokebedrock.com/support)
  ```  

## 🌍 Supporting Multiple Languages  

- New pages should be added in all supported languages (`en`, `pt`, `es`).  
- If a translation isn't available, create a placeholder file and request assistance.  

## 🔗 Useful Links  

- **Helpdesk:** [support.pokebedrock.com](https://support.pokebedrock.com)  
- **Shop:** [pokebedrock.com/shop](https://pokebedrock.com/shop)  
- **Contribute on GitHub:** [pokebedrock/helpdesk](https://github.com/pokebedrock/helpdesk)  

---

💙 Thank you for helping improve the PokéBedrock Helpdesk! 🚀
