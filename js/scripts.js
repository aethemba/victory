$(document).ready(function(){

    var projects = {};

    function createCORSRequest(method, url) {
      var xhr = new XMLHttpRequest();
      if ("withCredentials" in xhr) {

        // Check if the XMLHttpRequest object has a "withCredentials" property.
        // "withCredentials" only exists on XMLHTTPRequest2 objects.
        xhr.open(method, url, true);

      } else if (typeof XDomainRequest != "undefined") {

        // Otherwise, check if XDomainRequest.
        // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
        xhr = new XDomainRequest();
        xhr.open(method, url);

      } else {

        // Otherwise, CORS is not supported by the browser.
        xhr = null;

      }
      return xhr;
    }

    function makeCorsRequest() {
      var projectCount = 100;
      // All HTML5 Rocks properties support CORS.
      var url = 'https://testing.onepercentclub.com/api/bb_projects/projects/?page_size=' + projectCount;

      var xhr = createCORSRequest('GET', url);
      if (!xhr) {
        alert('CORS not supported');
        return;
      }

      // Response handlers.
      xhr.onload = function() {
        var text = xhr.responseText;
        result = JSON.parse(xhr.response);
        // PROJECT INFORMATION IS IN 'result.results'
      };

      xhr.onerror = function(err) {
        alert('Woops, there was an error making the request.');
      };

      xhr.send();
    }

    makeCorsRequest();

    $('.campaignTitle').html(project1.title)
    $('.mainTitle').html(project1.title)


    $('.mainTitle').attr('href','https://onepercentclub.com/go/projects/' + project1.id)

    $('.campaigner').html(project1.owner.full_name)
    $('.amountRaised').html('€' + project1.amount_donated)
    //$('.avatarCampaigner').html(project1.owner.avatar)

    var img = 
    $('.background-image').css('background-image', 'url(' + project1.image.large + ')')
    $('.avatarCampaigner').css('background-image', 'url(' + project1.owner.avatar + ')')
    $('.avatarCampaign').css('background-image', 'url(' + project1.image.square + ')')

       $('.curtains').curtain({
       	scrollSpeed:1200
       });
       
    	var scrollorama = $.scrollorama({
    		blocks:'.curtains'
    	});
        
        scrollorama.animate('#welcome h3, #welcome p',{
        	duration:200, property:'top', end:400
        });

        scrollorama.animate('#overview li:nth-child(1)',{
        	delay: 600, duration:200, property:'left', start:-600, end:-10
        });

        scrollorama.animate('#overview li:nth-child(2)',{
        	delay: 650, duration:200, property:'left', start:-600, end:-50
        });

        scrollorama.animate('#overview li:nth-child(3)',{
        	delay: 700, duration:200, property:'left', start:-600, end:-90
        });
        
        scrollorama.animate('#pictures ul li:nth-child(1)',{
        	delay: 1600, duration:200, property:'left', start:-620, end:0
        });

        scrollorama.animate('#pictures ul li:nth-child(2)',{
        	delay: 1600, duration:200, property:'right', start:-620, end:0
        });

        scrollorama.animate('#pictures ul li:nth-child(3)',{
        	delay: 1600, duration:200, property:'top', start:620, end:0
        });

        scrollorama.animate('#fullscreen ul li',{
        	delay: 2400, duration:200, property:'top', start:900, end:500
        });

        scrollorama.animate('#thankyou h3, #thankyou p',{
        	delay: 3600, duration:200, property:'top', start:250, end:450
        });
        
    });

    var project1=

    {
        "id": "a-legbank-for-colombia", 
        "created": "2014-12-02T09:43:22.448Z", 
        "title": "A legbank for Colombia", 
        "pitch": "Colombia is home to about 20.000 leg amputees caused by trauma (i.e. land mines, traffic accidents or at accidents at work) and disease (i.e. diabetes). We believe the most innovative and effective solution for this problem is found in the creation of a Leg Bank; who besides locally producing and offering low-cost and  customized prosthesis to amputees, also offer a financial product (e.g. lease or  loan)  to  make  the  prosthesis  economically accessible to the poor.  ", 
        "organization": 2930, 
        "description": "", 
        "owner": {
            "id": 26649, 
            "first_name": "Five ", 
            "last_name": "to Twelve", 
            "username": "pietervanschaik", 
            "avatar": "https://onepercentclub.com/static/media/cache/26/93/26938e4e37679918652cdfa2ef34f328.jpg", 
            "full_name": "Five  to Twelve", 
            "short_name": "Five "
        }, 
        "status": 5, 
        "meta_data": {
            "fb_title": "A legbank for Colombia in Colombia", 
            "description": "Colombia is home to about 20.000 leg amputees caused by trauma (i.e. land mines, traffic accidents or at accidents at work) and disease (i.e. diabetes). We believe the most innovative and effective...", 
            "title": "A legbank for Colombia | Social Entrepreneurship | Colombia", 
            "url": null, 
            "tweet": "A%20legbank%20for%20Colombia%20in%20Colombia {URL} via @1percentclub", 
            "keywords": "prothesis, colombia, social enterprise, legbank, fivetotwelve", 
            "image": "https://onepercentclub.com/static/media/cache/51/e9/51e9d7105c0d3a9db0673fe3be6cfeb6.jpg"
        }, 
        "image": {
            "large": "https://onepercentclub.com/static/media/cache/c5/77/c57794bbe2953e44f79a49325efa6da1.jpg", 
            "small": "https://onepercentclub.com/static/media/cache/96/69/9669eb3e6917a94efd51c7f7501969ca.jpg", 
            "full": "https://onepercentclub.com/static/media/cache/51/e9/51e9d7105c0d3a9db0673fe3be6cfeb6.jpg", 
            "square": "https://onepercentclub.com/static/media/cache/fd/55/fd55c953282932ac8ed65e42764a7dcc.jpg"
        }, 
        "country": {
            "id": 48, 
            "name": "Colombia", 
            "subregion": "South America", 
            "code": "CO"
        }, 
        "theme": 11, 
        "tags": [
            {
                "id": "prothesis"
            }, 
            {
                "id": "colombia"
            }, 
            {
                "id": "social enterprise"
            }, 
            {
                "id": "legbank"
            }, 
            {
                "id": "fivetotwelve"
            }
        ], 
        "language": 1, 
        "amount_asked": "3000.00", 
        "amount_donated": "3136.37", 
        "amount_needed": "0.00", 
        "allow_overfunding": true, 
        "task_count": 0, 
        "story": "<h3>Why Colombia?</h3><p><strong>Colombia is home to more than 10,000 leg amputees caused by traumatic experiences</strong>: landmines, traffic accidents, work accidents and diseases (i.e. diabetes). The incapacity that comes with an amputated leg can have severe consequences on an amputee\u2019s personal, social and work life. Although after amputation an amputee can never fully regain physical functionality like they used to, functionality to move around again can be regained to some degree by replacing the amputated leg with an artificial leg, also called a prosthesis.</p><p>People with low-income and living in rural areas are especially vulnerable to landmines and <strong>live far from prosthesis centres located in cities and are left without reasonable care</strong>. Currently, prostheses are very expensive (around \u20ac1400) in Colombia. Bearing in mind that the average salary is about \u20ac300, this is unreachable for people in need. A high quality and low-cost solution is needed, which enables low-income amputees to increase their health, social wellbeing and economic productivity.</p><h5><strong>Who are we</strong></h5><p><img height=\"289px;\" src=\"https://lh5.googleusercontent.com/vrLCQS8JIChCBs66hW8Jr0PgSxSamGcnhLGu1tAGbV9GItC_SNNaK99dJhE4SsvoFUtMK4RSMHUtHsUTzh-gkSB6LrKWQhLLBCyH54z0n8tT9JVB_-6l1IlZf4NMrjPPOg\" style=\"border: medium none; transform: rotate(0rad);\" width=\"389px;\"/></p><p>We are \u2018Five To Twelve\u2019, a team of six Industrial Design master students from the Technology University of Delft. Our team consists of two students from each of the three Master programs; Integrated Product Design (IPD), Strategic Product Design (SPD) and Design For Interaction (DFI). We are a diverse team with different backgrounds, studies and experiences.</p>\r\n<h3>The project</h3>\r\nThis project is set up by the <a href=\"http://proportionfoundation.org/\" target=\"_blank\">ProPortion Foundation </a> and design agency, <a href=\"http://reggs.com\" target=\"_blank\">Reggs</a>, collaborating with <a href=\"https://www.livit.nl/nl-nl/home.aspx\" target=\"_blank\">Livit </a> (market leader in prostheses in the Netherlands). ProPortion started the project, payed for our flights and is the project leader. Reggs and Livit provide their knowledge and experience to come up with a viable and reliable product.</p>\r\n<p>The main goal of the project is to develop a desirable, feasible and viable social business concept for affordable and high quality prostheses, to make prostheses more accessible the Base of the Pyramid in Colombia.</p><p><strong>During the project we focus on:</strong></p><p>1. Affordability &amp; high quality</p><p>2. Accessibility</p><p>3. Service-system and business model innovation (or feasibility within Colombian health system)</p><p>The project duration lasts five months, in which we combine field research in Colombia with our technical knowledge. The end result will be a working prototype with a strategic plan including a business model.Three people from the team have already spent four weeks in Colombia conducting field research to determine where the real problems lie.  We spoke to doctors, amputees, prosthetic technicians and centres, insurance companies and other stakeholders in order to gain a deep understanding of the context. </p><p>Now we need to send three people from our team to Colombia to test and validate our product-service system designs with amputees, technicians and doctors, in the context for which it is designed. From the 19th of December, we are sending three team members to Colombia with a prototype that has a new technology from Strathclyde University Scotland, which has been tested in Iraq and Afghanistan. This technology allows amputees to get a better-fitting socket that can be made within one day, which means that amputees could return to their family and work sooner than that the current process allows. Our design is a product-service system that is supported by this technology.\u00a0</p><h5><strong>Advantages of the new product-service system</strong></h5><ul><li>- Socket manufactured directly on the stump\u00a0</li><li>- Less material waste and quicker process</li><li>- Portable and accessible to people in remote areas </li></ul><h3>What we need</h3><p>In order to accomplish our mission we need funding support. We have estimated an amount of \u20ac8,200 for production materials, educational materials and conduct tests with different technologies. To reach this amount we have found some support from various companies and foundations like '<a href=\"http://www.students4sustainability.nl/nl\">Students for Sustainability</a>'. Our goal is to reach \u20ac 3,000 through crowdfunding, for which we are asking your contribution. Support us to manifest our skills, ideas and ambitions to design prostheses that actually reach people who need them.</p><p>Where is the money going?</p><ul><li>Research equipment \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u20ac 200</li><li>Prototyping facilities\u00a0  \u00a0 \u00a0   \u00a0 \u00a0 \u00a0 \u00a0 \u20ac 400</li><li>Materials \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0  \u00a0 \u00a0 \u00a0 \u00a0 \u20ac 800</li><li>User-testing and validation \u00a0 \u20ac 900</li><li>Interpreters \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u20ac 400</li><li>Organisational\u00a0  \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u20ac 300</li></ul><h3>What do we offer</h3><p>To show our appreciation of your support we would like to thank you with gifts: from personal thank you notes (incl our best efforts trying to draw prostheses! ^^)  from the team, to Colombian coffee brought back by the team members who leave to Colombia in December. Check them out!</p>", 
        "deadline": "2015-01-14T23:00:00Z", 
        "latitude": "6.230833000000000000", 
        "longitude": "-75.590555999999990000", 
        "video_url": "https://www.youtube.com/watch?v=N8SyN9aIvII", 
        "video_html": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/N8SyN9aIvII?feature=oembed&showinfo=0&controls=0\" frameborder=\"0\" allowfullscreen></iframe>", 
        "partner": null, 
        "mchanga_account": ""
    }

