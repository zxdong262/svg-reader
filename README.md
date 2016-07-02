# svg-reader
[![Build Status](https://travis-ci.org/zxdong262/svg-reader.svg?branch=master)](https://travis-ci.org/zxdong262/svg-reader)

sync read svg icons and parse to icons object


## get
```bash
npm install vue-pagenav
```

## use

```javascript

const read = require('svg-reader')
var icons = read(__dirname + '/icons.dvg')

/*
icons = 
{ home: 
   { name: 'home',
     width: 928,
     height: 1000,
     path: 'M786 296v-267q0-15-11-26t-25-10h-214v214h-143v-214h-214q-15 0-25 10t-11 26v267q0 1 0 2t0 2l321 264 321-264q1-1 1-4z m124 39l-34-41q-5-5-12-6h-2q-7 0-12 3l-386 322-386-322q-7-4-13-3-7 1-12 6l-35 41q-4 6-3 13t6 12l401 334q18 15 42 15t43-15l136-114v109q0 8 5 13t13 5h107q8 0 13-5t5-13v-227l122-102q5-4 6-12t-4-13z',
     ascent: 850,
     svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 928 1000"><g transform="scale(1,-1) translate(0 -850)"><path d="M786 296v-267q0-15-11-26t-25-10h-214v214h-143v-214h-214q-15 0-25 10t-11 26v267q0 1 0 2t0 2l321 264 321-264q1-1 1-4z m124 39l-34-41q-5-5-12-6h-2q-7 0-12 3l-386 322-386-322q-7-4-13-3-7 1-12 6l-35 41q-4 6-3 13t6 12l401 334q18 15 42 15t43-15l136-114v109q0 8 5 13t13 5h107q8 0 13-5t5-13v-227l122-102q5-4 6-12t-4-13z"/></g></svg>' },
  link: 
   { name: 'link',
     width: 928,
     height: 1000,
     path: 'M812 171q0 23-15 38l-116 116q-16 16-38 16-24 0-40-18 1-1 10-10t12-12 9-11 7-14 2-15q0-23-16-38t-38-16q-8 0-15 2t-14 7-11 9-12 12-10 10q-19-17-19-40 0-23 16-38l115-116q15-15 38-15 22 0 38 15l82 81q15 16 15 37z m-392 394q0 22-15 38l-115 115q-16 16-38 16-22 0-38-15l-82-82q-16-15-16-37 0-22 16-38l116-116q15-15 38-15 23 0 40 17-2 2-11 11t-12 12-8 10-7 14-2 16q0 22 15 38t38 15q9 0 16-2t14-7 10-8 12-12 11-11q18 17 18 41z m500-394q0-67-48-113l-82-81q-46-47-113-47-68 0-114 48l-115 115q-46 47-46 114 0 68 49 116l-49 49q-48-49-116-49-67 0-114 47l-116 116q-47 47-47 114t47 113l82 82q47 46 114 46 67 0 114-47l114-116q47-46 47-113 0-69-49-117l49-49q48 49 116 49 67 0 114-47l116-116q47-47 47-114z',
     ascent: 850,
     svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 928 1000"><g transform="scale(1,-1) translate(0 -850)"><path d="M812 171q0 23-15 38l-116 116q-16 16-38 16-24 0-40-18 1-1 10-10t12-12 9-11 7-14 2-15q0-23-16-38t-38-16q-8 0-15 2t-14 7-11 9-12 12-10 10q-19-17-19-40 0-23 16-38l115-116q15-15 38-15 22 0 38 15l82 81q15 16 15 37z m-392 394q0 22-15 38l-115 115q-16 16-38 16-22 0-38-15l-82-82q-16-15-16-37 0-22 16-38l116-116q15-15 38-15 23 0 40 17-2 2-11 11t-12 12-8 10-7 14-2 16q0 22 15 38t38 15q9 0 16-2t14-7 10-8 12-12 11-11q18 17 18 41z m500-394q0-67-48-113l-82-81q-46-47-113-47-68 0-114 48l-115 115q-46 47-46 114 0 68 49 116l-49 49q-48-49-116-49-67 0-114 47l-116 116q-47 47-47 114t47 113l82 82q47 46 114 46 67 0 114-47l114-116q47-46 47-113 0-69-49-117l49-49q48 49 116 49 67 0 114-47l116-116q47-47 47-114z"/></g></svg>' },
  unlink: 
   { name: 'unlink',
     width: 928,
     height: 1000,
     path: 'M245 141l-143-143q-5-5-13-5-6 0-13 5-5 5-5 13t5 13l143 142q6 5 13 5t13-5q5-5 5-12t-5-13z m94-23v-179q0-8-5-13t-13-5-12 5-5 13v179q0 8 5 13t12 5 13-5 5-13z m-125 125q0-8-5-13t-13-5h-178q-8 0-13 5t-5 13 5 13 13 5h178q8 0 13-5t5-13z m706-72q0-67-48-113l-82-81q-46-47-113-47-68 0-114 48l-186 187q-12 11-24 31l134 10 152-153q15-15 38-15t38 15l82 81q15 16 15 37 0 23-15 38l-153 154 10 133q20-12 31-23l188-188q47-48 47-114z m-345 404l-133-10-152 153q-16 16-38 16-22 0-38-15l-82-82q-16-15-16-37 0-22 16-38l153-153-10-134q-20 12-32 24l-187 187q-47 48-47 114 0 67 47 113l82 82q47 46 114 46 67 0 114-47l186-187q12-12 23-32z m354-46q0-8-5-13t-13-5h-179q-8 0-13 5t-5 13 5 12 13 5h179q8 0 13-5t5-12z m-304 303v-178q0-8-5-13t-13-5-13 5-5 13v178q0 8 5 13t13 5 13-5 5-13z m227-84l-143-143q-6-5-13-5t-12 5q-5 6-5 13t5 13l142 143q6 5 13 5t13-5q5-6 5-13t-5-13z',
     ascent: 850,
     svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 928 1000"><g transform="scale(1,-1) translate(0 -850)"><path d="M245 141l-143-143q-5-5-13-5-6 0-13 5-5 5-5 13t5 13l143 142q6 5 13 5t13-5q5-5 5-12t-5-13z m94-23v-179q0-8-5-13t-13-5-12 5-5 13v179q0 8 5 13t12 5 13-5 5-13z m-125 125q0-8-5-13t-13-5h-178q-8 0-13 5t-5 13 5 13 13 5h178q8 0 13-5t5-13z m706-72q0-67-48-113l-82-81q-46-47-113-47-68 0-114 48l-186 187q-12 11-24 31l134 10 152-153q15-15 38-15t38 15l82 81q15 16 15 37 0 23-15 38l-153 154 10 133q20-12 31-23l188-188q47-48 47-114z m-345 404l-133-10-152 153q-16 16-38 16-22 0-38-15l-82-82q-16-15-16-37 0-22 16-38l153-153-10-134q-20 12-32 24l-187 187q-47 48-47 114 0 67 47 113l82 82q47 46 114 46 67 0 114-47l186-187q12-12 23-32z m354-46q0-8-5-13t-13-5h-179q-8 0-13 5t-5 13 5 12 13 5h179q8 0 13-5t5-12z m-304 303v-178q0-8-5-13t-13-5-13 5-5 13v178q0 8 5 13t13 5 13-5 5-13z m227-84l-143-143q-6-5-13-5t-12 5q-5 6-5 13t5 13l142 143q6 5 13 5t13-5q5-6 5-13t-5-13z"/></g></svg>' }
}

*/
```


## test
```bash
git clone git@github.com:zxdong262/svg-reader.git
cd svg-reader
npm i
npm run test
```

## License
MIT