var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "ch-syllabus",
  "level": "1",
  "url": "ch-syllabus.html",
  "type": "Chapter",
  "number": "1",
  "title": "Course Introduction",
  "body": " Course Introduction  Welcome to the course.   Course Information  This course is about magic beans. And about how bad copilot is at writing syllabi.    Grading  This course has no grades because it is just a demo.   "
},
{
  "id": "sec-1-1",
  "level": "1",
  "url": "sec-1-1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Units",
  "body": " Units  We're testing embedding doenet:   "
},
{
  "id": "ch-course-notes",
  "level": "1",
  "url": "ch-course-notes.html",
  "type": "Chapter",
  "number": "3",
  "title": "Case Studies",
  "body": " Case Studies   The following notes are intended to remind you what we covered each week. They are not a substitute for attending class and not a substitute for reading the textbook.    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
