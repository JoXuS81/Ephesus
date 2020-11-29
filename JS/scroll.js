/* 
*****************
TABLE OF CONTENTS
*****************

1. Scroll to Home 
2. Scroll to About 
3. Scroll to Contact
4. Scroll to Departments 
5. Scroll to Government
6. Scroll to News 
7. Scroll to About, from News Section 
8. Scroll to Contact, from News Section 
9. Scroll to Departments, from News Section 
10. Scroll to Government, from News Section 
11. Scroll to Home, from News Section 
12. Scroll to Home, from Footer Section 
13. Scroll to About, from Home, Learn More

*/


/* Scroll to Contact */
$(".link_contact").click(function() {
    $('html, body').animate({
     scrollTop: $("#contact_anchor").offset().top
 }, 1500);
}); 


/* Scroll to Home */
$(".link_home").click(function() {
    $('html, body').animate({
     scrollTop: $("#home_anchor").offset().top
 }, 1500);
}); 


/* Scroll to Methods */
$(".link_methods").click(function() {
    $('html, body').animate({
     scrollTop: $("#methods_anchor").offset().top
 }, 1500);
}); 


/* Scroll to Milestones */
$(".link_milestones").click(function() {
    $('html, body').animate({
     scrollTop: $("#milestones_anchor").offset().top
 }, 1500);
}); 


/* Scroll to Mission (from arrow) */
$(".arrow").click(function() {
    $('html, body').animate({
     scrollTop: $("#mission_anchor").offset().top
 }, 1500);
}); 


/* Scroll to Mission */
$(".link_mission").click(function() {
    $('html, body').animate({
     scrollTop: $("#mission_anchor").offset().top
 }, 1500);
}); 


/* Scroll to Objectives */
$(".link_objectives").click(function() {
    $('html, body').animate({
     scrollTop: $("#objectives_anchor").offset().top
 }, 1500);
}); 


/* Scroll to Visits */
$(".link_visits").click(function() {
    $('html, body').animate({
     scrollTop: $("#visits_anchor").offset().top
 }, 1500);
}); 