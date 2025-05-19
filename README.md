# Math 112 

This README is for creating a new instance of the text for math 112. 

## Updates

To update the source, from your repository select Code > Create Codespace on Main. This will allow you to make updates 
without installing anything locally on your machine. When you make changes using a codespcae, you are making all your edits on a *virtual machine* off in some remote server farm.  This means there is an extra step to save your files.  You can save files in the editor (in your browser), but this just saves them to that virtual machine.  To make sure you can access these files, even if the virtual machine goes away, you need to sync them to github.com.  This is done by *committing* your changes and then *pushing* those commits (or "syncing" them). These green buttons are accessed via the Source Control menu on the left. You might see a warning when you restart your codespace that you have "uncommitted changes" -- make sure you commit them when you are done working.

To view your updates, select the PreTeXt menu at the bottom of the screen, "Build another target", and select web. Once this
has run successfully, you can run PreTeXt > View Full Document > web to see your results at a temporary URL. 

### Update the syllabus

Access source/syllabus.ptx. Update Course Details and the Tentative Schedule.

### Update shared spreadsheets

There are a few places in the text that link to a shared spreadsheet for storing class data. You should house this spreadsheet
in your OneDrive. 

Access source/chapter5/sections/activities/act_05_01.ptx. In line 19, replace the current href with a link to your 5.1 spreadsheet.

Access source/chapter5/sections/activities/doenet/ch5-doenet-lln-1.doenetml. In line 80, replace the curren uri with a link
to your 5.4 spreadsheet.

### Updates for large class sizes

If you have a large class size, you may need to update a few more items.

If you have more than 30 students, you will need to change the number of rows in the spreadsheets in 

source/chapter5/sections/activities/doenet/ch5-doenet-data-collect.doenetml

and 

source/chapter5/sections/activities/doenet/ch5-doenet-freq-histo-intro.doenetml

and 

source/chapter5/sections/activities/doenet/ch5-doenet-freq-histo-build.doenetml (lines 6 and 111).

If you have more than 100 students, you will need to change the number of bins use to create the histograms in

source/chapter5/sections/activities/doenet/ch5-doenet-freq-histo-intro.doenetml (lines 34 -- 88)

and 

source/chapter5/sections/activities/doenet/ch5-doenet-freq-histo-build.doenetml (lines 30 -- 84 and lines 135 -- 189).

## Deploy and use the text

When you're happy with your updates, you need to deploy your work to Github pages. Select PreTeXt > Deploy to GitHub pages to do so. From your repository, go to Settings > Pages to see the url where your document is hosted. 

There are different options on how you can have students access this text. You can just give them access to the url within Canvas, and they can link out to the full document. You can also host different pieces of the html document within Canvas using an iframe. For example, I could edit the "Syllabus" page in my Canvas course and select the "Embed" option (it is the one with a cloud icon). I could then enter 

```bash
<iframe src='https://https://jshriner6.github.io/math-of-sustainability/pref-syllabus.html?embed' width='100%' height='1000px' frameborder='0'></iframe> 
```
where the url listed points directly to my syllabus page.

## Going Further

Technically you can edit anything about the text and interactives that you'd like. There are lots of resources out there for learning more about these tools, or feel free to reach out to jeffrey.shriner@colostate.edu if you'd like to discuss any further modifications that you're interested in.