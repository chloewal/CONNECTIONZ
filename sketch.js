//credits to allison parrish's article on CSV files:https://creative-coding.decontextualize.com/csv-files/
//which helped me understand csv files 
//also a huge THANK YOU to the Slave Voyages dataset, 
//it has some of the most in depth, meaningful collection 
//of information I have ever seen in my life: this is the specific data 
//search I used: 
//https://www.slavevoyages.org/voyage/database#searchId=Vfy0NpHL  

let data;
let counter = 0;
let button;
let myFont;
let font1, font2;

function preload() {
  data = loadTable('data_edited_dan.csv', 'csv', 'header');
  font1 = loadFont('canterbu.ttf'); //olde english font
  font2 = loadFont('Inconsolata-Regular.ttf'); //monotype font
}

function setup() {
  createCanvas(600, 500);
  button = createButton("NEXT VESSEL");
  button.position(250, 520);
  button.mousePressed(nextYear);
}

function nextYear() {
  counter = counter + 1;
}

function draw() {

  background(0);
  let row = data.getRow(counter);
  textAlign(CENTER, CENTER);
  let status = row.getString("resistance");
  let vessel = row.getString("vessel_name");
  let purchase = row.getString("region_of_purchase");
  let landing = row.getString("region_of_landing");

  //style of text pulled from data
  fill(255);
  push();
  textFont(font1);
  textSize(40);
  text(status, width / 2, 215);
  pop();
  push();
  textFont(font1);
  textSize(25);
  text(vessel, width / 2, 125);
  text(purchase, width / 2, 350);
  text(landing, width / 2, 435);
  pop();
  
  //style of static text
  push();
  textFont(font2);
  textSize(15);
  text('Vessel Name:', width / 2, 100);
  text('Region of Purchase:', width/2, 325);
  text('Region of Landing:', width/2, 410);
  pop();
  
  textFont(font1);
  textSize(22);
  text('Moments of African resistance during the Trans Atlantic Slave Trade', width/2, 38);
  textFont(font2);
  textSize(12);
  text('(Insurrection: a violent uprising against an authority or government)', width/2,245);
  
}