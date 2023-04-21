set up heroku account
install dotenv
create .env
put credientials in .env

create db folder
create index.js inside db folder
require dotenv in db index.js

install pg
require pg in db index.js with variable destructed Pool
instinate new Pool() as variable pool
hand in to pool object with databse crediential settings
set up module.exports, export object with query key and value as function, function takes text, params, callback return pool query function with same arguments

create scripts folder inside db
create file createTable.js
require deconstructed query from db index.js
make async function createTable()
inside function body await query function store variable res
create sqlstatement with sqlStatement table name...
add sqlStatement as argument for await query function, console.log(res)
call createTable()
add script to package.json
