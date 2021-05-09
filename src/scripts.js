jQuery(document).ready(function($) {
	tab = $('.tabs h3 a');

	tab.on('click', function(event) {
		event.preventDefault();
		tab.removeClass('active');
		$(this).addClass('active');

		tab_content = $(this).attr('href');
		$('div[id$="tab-content"]').removeClass('active');
		$(tab_content).addClass('active');
	});
});

/* Navbar */

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}
  }

/* Translation */
function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
  }

/* Providers */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function showPCP() {
	document.getElementById("accordion-1").classList.toggle("show");
  }

/* Insurance */

function showIns() {
	document.getElementById("container-ins").classList.toggle("show");
  }


/* Daily Log */
function showresult(){
	var n1=parseFloat(document.getElementById('num1').value);
	var n2=parseFloat(document.getElementById('num2').value);

	var message;
	if (n1>180 || n2>120) {
		message="Hypertensive Crisis, please seek emergency care!";
	}	else if (n1>=140 || n2>=90) {
		message="High Blood Pressure (Stage 2)";
	}	else if (130<=n1 || 80<=n2) {
		message="High Blood Pressure (Stage 1)";
	}	else if (n1<120 && n2<80) {
		message="Normal";
	}

	document.getElementById('result').innerHTML=message;	
	}

function saveresult(){
	var n1=parseFloat(document.getElementById('bloodpressure').value);
	var n2=parseFloat(document.getElementById('bloodsugar').value);
	var n3=parseFloat(document.getElementById('heartrate').value);

	document.getElementById('bloodpressure-1').value=n1;	

	document.getElementById('bloodsugar-1').value=n2;	
	
	document.getElementById('heartrate-1').value=n3;	
	}