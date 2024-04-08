//page one code
customElements.define("page-one", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <ion-header>
        <ion-toolbar color="warning">
            <ion-grid>
                <ion-row>
                  <ion-col></ion-col>
                  <ion-col><ion-title>Hello!</ion-title></ion-col>
                  <ion-col></ion-col>
                </ion-row>
              </ion-grid>
        </ion-toolbar>
    </ion-header>

        <ion-content>
            <ion-card>
                <ion-card-content>
                    <h2>And welcome. This app is designed to help match you up with one of our professional therapists, tailored to your specific needs. By the end, you will have gone through these sections of our survey.</h2>
                    <p>-Personal Information<br>-Contact Preferences<br>-Your symptoms</p>
                    <h2>Once completed, we will have the necessary information to pair you up with a therapist. You will be given a selection of options based on your needs, along with their contact information.<br>Let's get started!</h2>
                </ion-card-content>
            </ion-card>
            <ion-grid>
                <ion-row>
                  <ion-col></ion-col>
                  <ion-col><ion-button color="warning" href="#/two">Next</ion-button></ion-col>
                  <ion-col></ion-col>
                </ion-row>
              </ion-grid>
        </ion-content>
        `;
    }
});

//------------------------------------------------------------------------
//page 2 code
customElements.define("page-two", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <ion-header>
        <ion-toolbar color="warning">
            <ion-grid>
                <ion-row>
                  <ion-col><ion-buttons>
                  <ion-back-button></ion-back-button>
              </ion-buttons></ion-col>
                  <ion-col><ion-title>Personal Information</ion-title></ion-col>
                  <ion-col></ion-col>
                </ion-row>
              </ion-grid>
        </ion-toolbar>
    </ion-header>
    
    <ion-content>
        <ion-card>
            <ion-card-content>
                <ion-list>
                    <ion-item>
                        <ion-input label="Full Name" placeholder="John Smith" id="Name-Input"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-button color="light" id="Name-button">Submit Name</ion-button>
                    </ion-item>
                    <ion-item>
                        <ion-input id="Email-Input" label-placement="floating" value="">
                          <div slot="label">Email <ion-text color="danger">(Required)</ion-text></div>
                        </ion-input>
                      </ion-item>
                      <ion-item>
                        <ion-button color="light" id="Email-button">Submit Email</ion-button>
                      </ion-item>
                      <ion-item>
                        <ion-input label="Phone Number" type="tel" placeholder="888-888-8888" id="Phone-Number-Input"></ion-input>
                      </ion-item>
                      <ion-item>
                      <ion-button color="light" id="Phone-Number-button">Submit Phone Number</ion-button>
                      </ion-item>
                      <ion-item>
                      <ion-radio-group id="genderradioGroup" value="male">
                          <ion-list-header>
                              What Is Your Gender?
                          </ion-list-header>
                          <ion-radio value="male">Male</ion-radio><br />
                          <ion-radio value="female">Female</ion-radio><br />
                          <ion-radio value="pref-not-to-say">Prefer Not To Say</ion-radio><br />
                      </ion-radio-group>
                  </ion-item>
                  
            </ion-card-content>
        </ion-card>
        <ion-grid>
            <ion-row>
              <ion-col></ion-col>
              <ion-col><ion-button color="warning" href="#/three">Next</ion-button></ion-col>
              <ion-col></ion-col>
            </ion-row>
          </ion-grid>
    </ion-content>
    `;

    // Variables
    let nameValue;
    let emailValue;
    let phonenumberValue;

    // Function to store the name input
    document.querySelector('#Name-button').onclick = function(){
        nameValue = document.querySelector('#Name-Input').value;
        console.log("Name:", nameValue);

        sessionStorage.setItem('Name', nameValue);
        console.log("Name is stored to session storage");
    }

    // Function to store the email input
    document.querySelector('#Email-button').onclick = function(){
        emailValue = document.querySelector('#Email-Input').value;
        console.log("Email:", emailValue);

        sessionStorage.setItem('Email', emailValue);
        console.log("Email is stored to session storage");
    }

    // Function to store the phone number input
    document.querySelector('#Phone-Number-button').onclick = function(){
        phonenumberValue = document.querySelector('#Phone-Number-Input').value;
        console.log("PhoneNumber:", phonenumberValue);

        sessionStorage.setItem('Phone-Number', phonenumberValue);
        console.log("Phone-Number is stored to session storage");
    }

    // Select all radio buttons inside the gender radio group
    const genderradioButtons = document.querySelectorAll('#genderradioGroup ion-radio');
    //Function to get gender input
    // Loop through each radio button and add event listener
    genderradioButtons.forEach(function(radioButton) {
        radioButton.addEventListener('click', function() {
            const genderselectedValue = radioButton.getAttribute('value');
            console.log("Gender:", genderselectedValue);
            
        });
    });

}
});
//------------------------------------------------------------------------
//page three code
customElements.define("page-three", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <ion-header>
        <ion-toolbar color="warning">
            <ion-grid>
                <ion-row>
                  <ion-col><ion-buttons>
                  <ion-back-button></ion-back-button>
              </ion-buttons></ion-col>
                  <ion-col><ion-title>Contact Preferences</ion-title></ion-col>
                  <ion-col></ion-col>
                </ion-row>
              </ion-grid>
        </ion-toolbar>
    </ion-header>

    <ion-content>
        <ion-card>
            <ion-card-content>
                <ion-list>
                    <ion-checkbox id="Email-check">Email</ion-checkbox>
                    <br>
                    <ion-checkbox onchange="storemessagingCheck()" id="Messaging-check">Messaging</ion-checkbox>
                    <br>
                    <ion-checkbox onchange="storeemailCheck()" id="PhoneCall-check">Phone Call</ion-checkbox>
                    <br>
                    <ion-checkbox onchange="storevideocallCheck()" id="VideoCall-check">Video Call</ion-checkbox>
                    <br>
                    <ion-checkbox onchange="storeinpersonCheck()" id="InPerson-check">In Person</ion-checkbox>
                </ion-list>
            </ion-card-content>
        </ion-card>
        <ion-grid>
            <ion-row>
              <ion-col></ion-col>
              <ion-col><ion-button color="warning" href="#/four">Next</ion-button></ion-col>
              <ion-col></ion-col>
            </ion-row>
          </ion-grid>
    </ion-content> 
    `;

    //Variables
    const emailCheckbox = this.querySelector('#Email-check');
    emailCheckbox.addEventListener('ionChange', storeemailCheck);

    const messagingCheckbox = this.querySelector('#Messaging-check');
    messagingCheckbox.addEventListener('ionChange', storemessagingCheck);

    const phonecallCheckbox = this.querySelector('#PhoneCall-check');
    phonecallCheckbox.addEventListener('ionChange', storephonecallCheck);

    const videocallCheckbox = this.querySelector('#VideoCall-check');
    videocallCheckbox.addEventListener('ionChange', storevideocallCheck);

    const inpersonCheckbox = this.querySelector('#InPerson-check');
    inpersonCheckbox.addEventListener('ionChange', storeinpersonCheck);

    let emailisChecked = false;
    let messagingisChecked = false;
    let phonecallisChecked = false;
    let videocallisChecked = false;
    let inpersonisChecked = false;
    
    //Code To store Email State
    function storeemailCheck(){
        if(emailisChecked==false){
            emailisChecked = true;
            console.log("Email: checked")
        }
        else if(emailisChecked==true){
            emailisChecked = false;
            console.log("Email: unchecked")
        }
    }

    //Code To store Messaging State
    function storemessagingCheck(){
        if(messagingisChecked==false){
            messagingisChecked = true;
            console.log("Messaging: checked");
        }
        else if(messagingisChecked==true){
            messagingisChecked = false;
            console.log("Messaging: unchecked");
        }
    }

    //Code To store PhoneCall State
    function storephonecallCheck(){
        if(phonecallisChecked==false){
            phonecallisChecked = true;
            console.log("PhoneCall: checked");
        }
        else if(phonecallisChecked==true){
            phonecallisChecked = false;
            console.log("PhoneCall: unchecked");
        }
    }

    //Code To store VideoCall State
    function storevideocallCheck(){
        if(videocallisChecked==false){
            videocallisChecked = true;
            console.log("VideoCall: checked")
        }
        else if(videocallisChecked==true){
            videocallisChecked = false;
            console.log("Videocall: unchecked");
        }
    }

    //Code To store In-Person State
    function storeinpersonCheck(){
        if(inpersonisChecked==false){
            inpersonisChecked = true;
            console.log("InPerson: checked");
        }
        else if(inpersonisChecked==true){
            inpersonisChecked = false;
            console.log("Inperson: unchecked");
        }
    }
}
});

//Mental Disorders Variables
let bipolarScore = 0;
let depressionScore = 0;
let ptsdScore = 0;
let ocdScore = 0;
let adhdScore = 0;
let autismScore = 0;
let schizophreniaScore = 0;

//Neutral Count Variable
let neutralCount = 1;

//------------------------------------------------------------------------
//page 4 code
customElements.define("page-four", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <ion-header>
        <ion-toolbar color="warning">
            <ion-grid>
                <ion-row>
                  <ion-col><ion-buttons>
                  <ion-back-button></ion-back-button>
              </ion-buttons></ion-col>
                  <ion-col><ion-title>Symptoms Page</ion-title></ion-col>
                  <ion-col></ion-col>
                </ion-row>
              </ion-grid>
        </ion-toolbar>
    </ion-header>

    <ion-content>
        <ion-card>
            <ion-card-content>
                <ion-list>
                    <ion-item>
                        <h2>Please pick either agree or disagree, depending on how you personally relate to the following questions.</h2>
                    </ion-item>
                    <ion-item>
                        <ion-radio-group id="q1radioGroup" value="q1-neutral">
                        <ion-list-header>
                            Q1. Do you often have feelings of hopelessness or unhappiness?
                        </ion-list-header>
                        <ion-radio value="q1-agree" id="agreeQ1">Agree</ion-radio><br/>
                        <ion-radio value="q1-neutral">Neutral</ion-radio><br/>
                        <ion-radio value="q1-disagree" id="disagreeQ1">Disagree</ion-radio><br/>
                        </ion-radio-group>
                    </ion-item>
                    <ion-item>
                        <ion-radio-group id="q2radioGroup" value="q2-neutral">
                        <ion-list-header>
                            Q2. Do you have a habit of repeating words in your head?
                        </ion-list-header>
                        <ion-radio value="q2-agree" id="agreeQ2">Agree</ion-radio><br/>
                        <ion-radio value="q2-neutral">Neutral</ion-radio><br/>
                        <ion-radio value="q2-disagree" id="disagreeQ2">Disagree</ion-radio><br/>
                        </ion-radio-group>
                    </ion-item>
                    <ion-item>
                        <ion-radio-group id="q3radioGroup" value="q3-neutral">
                        <ion-list-header>
                            Q3. Do you often find focussing on or completing tasks to be challenging?
                        </ion-list-header>
                        <ion-radio value="q3-agree" id="agreeQ3">Agree</ion-radio><br/>
                        <ion-radio value="q3-neutral">Neutral</ion-radio><br/>
                        <ion-radio value="q3-disagree" id="disagreeQ3">Disagree</ion-radio><br/>
                        </ion-radio-group>
                    </ion-item>
                    <ion-item>
                        <ion-radio-group id="q4radioGroup" value="q4-neutral">
                        <ion-list-header>
                            Q4. Do you often come across as being blunt or rude to people without intending to?
                        </ion-list-header>
                        <ion-radio value="q4-agree" id="agreeQ4">Agree</ion-radio><br/>
                        <ion-radio value="q4-neutral">Neutral</ion-radio><br/>
                        <ion-radio value="q4-disagree" id="disagreeQ4">Disagree</ion-radio><br/>
                        </ion-radio-group>
                    </ion-item>
                    <ion-item>
                        <ion-radio-group id="q5radioGroup" value="q5-neutral">
                        <ion-list-header>
                            Q5. Do you often find yourself lacking energy?
                        </ion-list-header>
                        <ion-radio value="q5-agree" id="agreeQ5">Agree</ion-radio><br/>
                        <ion-radio value="q5-neutral">Neutral</ion-radio><br/>
                        <ion-radio value="q5-disagree" id="disagreeQ5">Disagree</ion-radio><br/>
                        </ion-radio-group>
                    </ion-item>
                    <ion-item>
                        <ion-radio-group id="q6radioGroup" value="q6-neutral">
                        <ion-list-header>
                            Q6. Do you often get irritated easily?
                        </ion-list-header>
                        <ion-radio value="q6-agree" id="agreeQ6">Agree</ion-radio><br/>
                        <ion-radio value="q6-neutral">Neutral</ion-radio><br/>
                        <ion-radio value="q6-disagree" id="disagreeQ6">Disagree</ion-radio><br/>
                        </ion-radio-group>
                    </ion-item>
                    <ion-item>
                        <ion-radio-group id="q7radioGroup" value="q7-neutral">
                        <ion-list-header>
                            Q7. Do you often re-experience traumatic moments from your life through flashbacks or nightmares?
                        </ion-list-header>
                        <ion-radio value="q7-agree" id="agreeQ7">Agree</ion-radio><br/>
                        <ion-radio value="q7-neutral">Neutral</ion-radio><br/>
                        <ion-radio value="q7-disagree" id="disagreeQ7">Disagree</ion-radio><br/>
                        </ion-radio-group>
                    </ion-item>
                    <ion-item>
                        <ion-radio-group id="q8radioGroup" value="q8-neutral">
                        <ion-list-header>
                            Q8. Do you have a habit of wanting to avoid people, includng your friends?
                        </ion-list-header>
                        <ion-radio value="q8-agree" id="agreeQ8">Agree</ion-radio><br/>
                        <ion-radio value="q8-neutral">Neutral</ion-radio><br/>
                        <ion-radio value="q8-disagree" id="disagreeQ8">Disagree</ion-radio><br/>
                        </ion-radio-group>
                    </ion-item>     
            </ion-card-content>
        </ion-card>
        <ion-grid>
            <ion-row>
              <ion-col></ion-col>
              <ion-col><ion-button color="warning" href="#/five">Finish</ion-button></ion-col>
              <ion-col></ion-col>
            </ion-row>
          </ion-grid>
    </ion-content>
    `;
        //Select all radio buttons inside the Q1 radio group
        const Q1radioButtons = document.querySelectorAll('#q1radioGroup ion-radio');
        //Function to get Q1 input
        //Loop through each radio button and add event listener
        Q1radioButtons.forEach(function(radioButton) {
            radioButton.addEventListener('click', function() {
                const Q1selectedValue = radioButton.getAttribute('value');
                console.log("Q1 input:", Q1selectedValue);

                if(Q1selectedValue==='q1-agree'){
                    depressionScore++;
                    bipolarScore++;
                    ptsdScore++;
                    neutralCount--;
                }
                else if(Q1selectedValue==='q1-disagree'){
                    depressionScore--;
                    bipolarScore--;
                    ptsdScore--;
                    neutralCount--;
                }

                console.log("Depression Score:", depressionScore);
                console.log("Bipolar Score:", bipolarScore);
                console.log("PTSD Score:", ptsdScore);
                console.log("neutralCount depleted");
                
            });
        });

        //Select all radio buttons inside the Q2 radio group
        const Q2radioButtons = document.querySelectorAll('#q2radioGroup ion-radio');
        //Function to get Q2 input
        //Loop through each radio button and add event listener
        Q2radioButtons.forEach(function(radioButton) {
            radioButton.addEventListener('click', function() {
                const Q2selectedValue = radioButton.getAttribute('value');
                console.log("Q2 input:", Q2selectedValue);

                if(Q2selectedValue=='q2-agree'){
                    ocdScore++;
                    neutralCount--;
                }
                else if(Q2selectedValue==='q2-disagree'){
                    ocdScore--;
                    neutralCount--;
                }

                console.log("OCD Score:", ocdScore);
                console.log("neutralCount depleted");
                        
            });
        });

        //Select all radio buttons inside the Q3 radio group
        const Q3radioButtons = document.querySelectorAll('#q3radioGroup ion-radio');
        //Function to get Q3 input
        //Loop through each radio button and add event listener
        Q3radioButtons.forEach(function(radioButton) {
            radioButton.addEventListener('click', function() {
                const Q3selectedValue = radioButton.getAttribute('value');
                console.log("Q3 input:", Q3selectedValue);

                if(Q3selectedValue==='q3-agree'){
                    adhdScore++;
                    bipolarScore++;
                    ptsdScore++;
                    neutralCount--;
                }
                else if(Q3selectedValue==='q3-disagree'){
                    adhdScore--;
                    bipolarScore--;
                    ptsdScore--;
                    neutralCount--;
                }

                console.log("ADHD Score:", adhdScore);
                console.log("Bipolar Score:", bipolarScore);
                console.log("PTSD Score:", ptsdScore);
                console.log("neutralCount depleted");
                        
            });
        });

        //Select all radio buttons inside the Q4 radio group
        const Q4radioButtons = document.querySelectorAll('#q4radioGroup ion-radio');
        //Function to get Q4 input
        //Loop through each radio button and add event listener
        Q4radioButtons.forEach(function(radioButton) {
            radioButton.addEventListener('click', function() {
                const Q4selectedValue = radioButton.getAttribute('value');
                console.log("Q4 input:", Q4selectedValue);

                if(Q4selectedValue==='q4-agree'){
                    autismScore++;
                    neutralCount--;
                }
                else if(Q4selectedValue==='q4-disagree'){
                    autismScore--;
                    neutralCount--;
                }

                console.log("Autism Score:", autismScore);
                console.log("neutralCount depleted");
                                
            });
        });

        //Select all radio buttons inside the Q5 radio group
        const Q5radioButtons = document.querySelectorAll('#q5radioGroup ion-radio');
        //Function to get Q5 input
        //Loop through each radio button and add event listener
        Q5radioButtons.forEach(function(radioButton) {
            radioButton.addEventListener('click', function() {
                const Q5selectedValue = radioButton.getAttribute('value');
                console.log("Q5 input:", Q5selectedValue);

                if(Q5selectedValue==='q5-agree'){
                    bipolarScore++;
                    depressionScore++;
                    neutralCount--;
                }
                else if(Q5selectedValue==='q5-disagree'){
                    bipolarScore--;
                    depressionScore--;
                    neutralCount--;
                }

                console.log("Bipolar Score:", bipolarScore);
                console.log("Depression Score:", depressionScore);
                console.log("neutralCount depleted");
                                        
            });
        });

        //Select all radio buttons inside the Q6 radio group
        const Q6radioButtons = document.querySelectorAll('#q6radioGroup ion-radio');
        //Function to get Q6 input
        //Loop through each radio button and add event listener
        Q6radioButtons.forEach(function(radioButton) {
            radioButton.addEventListener('click', function() {
                const Q6selectedValue = radioButton.getAttribute('value');
                console.log("Q6 input:", Q6selectedValue);

                if(Q6selectedValue==='q6-agree'){
                    bipolarScore++;
                    autismScore++;
                    ptsdScore++;
                    neutralCount--;
                }
                else if(Q6selectedValue==='q6-disagree'){
                    bipolarScore--;
                    autismScore--;
                    ptsdScore--;
                    neutralCount--;
                }

                console.log("Bipolar Score:", bipolarScore);
                console.log("Autism Score:", autismScore);
                console.log("PTSD Score:", ptsdScore);
                console.log("neutralCount depleted");
                                                
            });
        });

        //Select all radio buttons inside the Q7 radio group
        const Q7radioButtons = document.querySelectorAll('#q7radioGroup ion-radio');
        //Function to get Q7 input
        //Loop through each radio button and add event listener
        Q7radioButtons.forEach(function(radioButton) {
            radioButton.addEventListener('click', function() {
                const Q7selectedValue = radioButton.getAttribute('value');
                console.log("Q7 input:", Q7selectedValue);

                if(Q7selectedValue==='q7-agree'){
                    ptsdScore++;
                    neutralCount--;
                }
                else if(Q7selectedValue==='q7-disagree'){
                    ptsdScore--;
                    neutralCount--;
                }
                
                console.log('PTSD Score:', ptsdScore);
                console.log("neutralCount depleted");
            });
        });

        //Select all radio buttons inside the Q8 radio group
        const Q8radioButtons = document.querySelectorAll('#q8radioGroup ion-radio');
        //Function to get Q8 input
        //Loop through each radio button and add event listener
        Q8radioButtons.forEach(function(radioButton) {
            radioButton.addEventListener('click', function() {
                const Q8selectedValue = radioButton.getAttribute('value');
                console.log("Q8 input:", Q8selectedValue);

                if(Q8selectedValue==='q8-agree'){
                    schizophreniaScore++;
                    autismScore++;
                    ptsdScore++;
                    neutralCount--;
                }
                else if(Q8selectedValue==='q8-disagree'){
                    schizophreniaScore--;
                    autismScore--;
                    ptsdScore--;
                    neutralCount--;
                }

                console.log("Schizophrenia Score:", schizophreniaScore);
                console.log("Autism Score:", autismScore);
                console.log("PTSD Score:", ptsdScore);
                console.log("neutralCount depleted");
                                                                
            });
        });
}
});
//------------------------------------------------------------------------
//page 5 code
customElements.define("page-five", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <ion-header>
        <ion-toolbar color="warning">
            <ion-grid>
                <ion-row>
                  <ion-col></ion-col>
                  <ion-col><ion-title>Results Page</ion-title></ion-col>
                  <ion-col></ion-col>
                </ion-row>
              </ion-grid>
        </ion-toolbar>
        </ion-header>
    <ion-content>
        <ion-card>
        <ion-list>
        <ion-grid>
        <ion-row>
            <ion-col></ion-col>
            <ion-col><ion-button color="light" id="get-results-button">Get Your Results!</ion-button></ion-col>
            <ion-col></ion-col>
        </ion-row>
        </ion-grid>
        </ion-list>
            <ion-item>
                <img src="" id="pikachu-sprite">
                <br>
                <div id="pikachu-name"></div>
            </ion-item>
            <ion-item>
                <img src="" id="mewtwo-sprite">
                <br>
                <div id="mewtwo-name"></div>
            </ion-item>
            <ion-item>
                <img src="" id="venusaur-sprite">
                <br>
                <div id="venusaur-name"></div>
            </ion-item>
            <ion-item>
                <img src="" id="koffing-sprite">
                <br>
                <div id="koffing-name"></div>
            </ion-item>
            <ion-item>
                <img src="" id="beedrill-sprite">
                <br>
                <div id="beedrill-name"></div>
            </ion-item>
            <ion-item>
                <img src="" id="geodude-sprite">
                <br>
                <div id="geodude-name"></div>
            </ion-item>
            <ion-item>
                <img src="" id="dragonite-sprite">
                <br>
                <div id="dragonite-name"></div>
        </ion-item>
        </ion-card>
    </ion-content>
    `;

    //Variables
    const resultsButton = document.querySelector('#get-results-button');

    resultsButton.addEventListener('click', displaypokemonDetails);
    
    //Function which is called after results button is pressed, allows the program to display neccesary data
    function displaypokemonDetails(){
        if(bipolarScore >= 1){
            getpikachuDetails();
        }
        if(depressionScore >= 1){
            getmewtwoDetails();
        }
        if(ptsdScore >= 1){
            getvenusaurDetails();
        }
        if(ocdScore >= 1){
            getkoffingDetails();
        }
        if(adhdScore >= 1){
            getbeedrillDetails();
        }
        if(autismScore >= 1){
            getgeodudeDetails();
        }
        if(schizophreniaScore >= 1){
            getdragoniteDetails();
        }
        if(neutralCount==1){
            resultsUnavailable();
        }
    }

    //Function to handle cases where the user has left all symptoms page radio buttons as neutral
    function resultsUnavailable(){
        alert("No results available");
        console.log("No input for symptoms")
    }

    //Fetches and displays Pikachu's data
    function getpikachuDetails(){


            fetchpikachuData();

            async function fetchpikachuData(){

                try{
                    const pikachuResponse = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

                    if(!pikachuResponse.ok){
                        throw new Error("Cannot fetch resource");
                    }

                    const data = await pikachuResponse.json();

                    const pikachuName = data.name
                    const pikachunameElement = document.getElementById("pikachu-name");
                    const pikachuSprite = data.sprites.front_default;
                    const pikachuimgElement = document.getElementById("pikachu-sprite");

                    pikachunameElement.textContent = pikachuName;
                    pikachuimgElement.src = pikachuSprite;
                }
                catch(error){
                    console.error(error);
                }
                console.log("Pikachu data successfully retrieved");
            }
    }

    //Fetches and displays Mewtwo's data
    function getmewtwoDetails(){

            
            fetchmewtwoData();

            async function fetchmewtwoData(){
                try{
                    const mewtwoResponse = await fetch("https://pokeapi.co/api/v2/pokemon/mewtwo");

                    if(!mewtwoResponse.ok){
                        throw new Error("Cannot fetch resource");
                    }

                    const data = await mewtwoResponse.json();

                    const mewtwoName = data.name
                    const mewtwonameElement = document.getElementById("mewtwo-name");
                    const mewtwoSprite = data.sprites.front_default;
                    const mewtwoimgElement = document.getElementById("mewtwo-sprite");

                    mewtwonameElement.textContent = mewtwoName;
                    mewtwoimgElement.src = mewtwoSprite;
                }
                catch(error){
                    console.error(error);
                }
                console.log("Mewtwo data successfully retrieved");
            }
    }

    //Fetches and displays Venusaur's data
    function getvenusaurDetails(){

        fetchvenusaurData();

            async function fetchvenusaurData(){
                try{
                    const venusaurResponse = await fetch("https://pokeapi.co/api/v2/pokemon/venusaur");

                    if(!venusaurResponse.ok){
                        throw new Error("Cannot fetch resource");
                    }

                    const data = await venusaurResponse.json();

                    const venusaurName = data.name
                    const venusaurnameElement = document.getElementById("venusaur-name");
                    const venusaurSprite = data.sprites.front_default;
                    const venusaurimgElement = document.getElementById("venusaur-sprite");

                    venusaurnameElement.textContent = venusaurName;
                    venusaurimgElement.src = venusaurSprite;
                }
                catch(error){
                    console.error(error);
                }
                console.log("Venusaur data successfully retrieved");
            }

    }

    //Fetches and displays Koffing's data
    function getkoffingDetails(){

        fetchkoffingData();

        async function fetchkoffingData(){
            try{
                const koffingResponse = await fetch("https://pokeapi.co/api/v2/pokemon/koffing");

                if(!koffingResponse.ok){
                    throw new Error("Cannot fetch resource");
                }

                const data = await koffingResponse.json();

                const koffingName = data.name
                const koffingnameElement = document.getElementById("koffing-name");
                const koffingSprite = data.sprites.front_default;
                const koffingimgElement = document.getElementById("koffing-sprite");

                koffingnameElement.textContent = koffingName;
                koffingimgElement.src = koffingSprite;
            }
            catch(error){
                console.error(error);
            }
            console.log("Koffing data successfully retrieved");
        }
    }

    //Fetches and displays Beedrill's data
    function getbeedrillDetails(){
        
        fetchbeedrillData();

        async function fetchbeedrillData(){
            try{
                const beedrillResponse = await fetch("https://pokeapi.co/api/v2/pokemon/beedrill");

                if(!beedrillResponse.ok){
                    throw new Error("Cannot fetch resource");
                }

                const data = await beedrillResponse.json();

                const beedrillName = data.name
                const beedrillnameElement = document.getElementById("beedrill-name");
                const beedrillSprite = data.sprites.front_default;
                const beedrillimgElement = document.getElementById("beedrill-sprite");

                beedrillnameElement.textContent = beedrillName;
                beedrillimgElement.src = beedrillSprite;
            }
            catch(error){
                console.error(error);
            }
            console.log("Beedrill data successfully retrieved");
        }
    }
    
    //Fetches and displays Geodude's data
    function getgeodudeDetails(){
        fetchgeodudeData();

        async function fetchgeodudeData(){
            try{
                const geodudeResponse = await fetch("https://pokeapi.co/api/v2/pokemon/geodude");

                if(!geodudeResponse.ok){
                    throw new Error("Cannot fetch resource");
                }

                const data = await geodudeResponse.json();

                const geodudeName = data.name
                const geodudenameElement = document.getElementById("geodude-name");
                const geodudeSprite = data.sprites.front_default;
                const geodudeimgElement = document.getElementById("geodude-sprite");

                geodudenameElement.textContent = geodudeName;
                geodudeimgElement.src = geodudeSprite;
            }
            catch(error){
                console.error(error);
            }
            console.log("Geodude data successfully retrieved");
        }
    }

    //Fetches and displays Dragonite's data
    function getdragoniteDetails(){
        fetchdragoniteData();

        async function fetchdragoniteData(){
            try{
                const dragoniteResponse = await fetch("https://pokeapi.co/api/v2/pokemon/dragonite");

                if(!dragoniteResponse.ok){
                    throw new Error("Cannot fetch resource");
                }

                const data = await dragoniteResponse.json();

                const dragoniteName = data.name
                const dragonitenameElement = document.getElementById("dragonite-name");
                const dragoniteSprite = data.sprites.front_default;
                const dragoniteimgElement = document.getElementById("dragonite-sprite");

                dragonitenameElement.textContent = dragoniteName;
                dragoniteimgElement.src = dragoniteSprite;
            }
            catch(error){
                console.error(error);
            }
            console.log("Dragonite data successfully retrieved")
        }
    }
}
});