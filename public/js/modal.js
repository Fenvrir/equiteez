$modal=function(t){var e,o,a,l=!1,n=!1,s=200;function d(){l=!0,e.classList.remove("modal__show"),e.classList.add("modal__hiding"),setTimeout(function(){e.classList.remove("modal__hiding"),l=!1},s),document.dispatchEvent(a)}function c(t){"modal"===t.target.dataset.dismiss&&d()}return(e=function(t){var e,o=document.createElement("div"),a="";if(o.classList.add("modal"),e=(e='<div class="modal__backdrop" data-dismiss="modal"><div class="modal__content"><div class="modal__header"><div class="modal__title" data-modal="title">{{title}}</div></div><div class="modal__body" data-modal="content">{{content}}</div>{{footer}}</div></div>'.replace("{{title}}",t.title||"Новое окно")).replace("{{content}}",t.content||""),t.footerButtons){for(var l=0,n=t.footerButtons.length;l<n;l++){var s='<button type="button" class="{{button_class}}" data-handler={{button_handler}}>{{button_text}}</button>'.replace("{{button_class}}",t.footerButtons[l].class);a+=s=(s=s.replace("{{button_handler}}",t.footerButtons[l].handler)).replace("{{button_text}}",t.footerButtons[l].text)}a='<div class="modal__footer">{{buttons}}</div>'.replace("{{buttons}}",a)}return e=e.replace("{{footer}}",a),o.innerHTML=e,document.body.appendChild(o),o}(t||{})).addEventListener("click",c),o=new CustomEvent("show.modal",{detail:e}),a=new CustomEvent("hide.modal",{detail:e}),{show:function(){n||l||(e.classList.add("modal__show"),document.dispatchEvent(o))},hide:d,destroy:function(){e.parentElement.removeChild(e),e.removeEventListener("click",c),n=!0},setContent:function(t){e.querySelector('[data-modal="content"]').innerHTML=t},setTitle:function(t){e.querySelector('[data-modal="title"]').innerHTML=t}}},function(){var e=$modal({title:"Signup For Free",content:`<form action="#">
      <div class="form-group row justify-content-between">
          <label 
              class=" col-sm-2 col-form-label">Name</label>
          <div class="  col-sm-9">
              <input type="text" class="form-control" id="inputName" placeholder="Name">
          </div>
      </div>
      <div class="form-group row justify-content-between">
          <label 
              class="col-sm-2 col-form-label">Company</label>
          <div class=" col-sm-9">
              <input type="text" id="inputCompany" placeholder="Company" class="form-control">
          </div>
      </div>
      <div class="form-group row justify-content-between">
          <label
               class="col-sm-2 col-form-label">E-mail*</label>
          <div class=" col-sm-9">
              <input type="text" id="inputEmail" placeholder="E-mail" class="form-control">
          </div>
      </div>
      <div class="form-group row justify-content-between">
          <label 
              class=" col-sm-2 col-form-label">Message*</label>
          <div class="col-sm-9">
              <textarea id="inputMessage" class="form-control" rows="5"
                  placeholder="Message"></textarea>
          </div>
      </div>
  </form>`,footerButtons:[{class:"button button-contact button-shadow",text:"Send",handler:"modalHandlerOk"}]});document.addEventListener("click",function(t){"modal"===t.target.dataset.toggle?(t.target,e.show()):"modalHandlerOk"===t.target.dataset.handler&&e.hide()})}(),function(){var e=$modal({title:"Successfully! We will send early access soon."});document.addEventListener("click",function(t){"modal-success"===t.target.dataset.toggle?(t.target,e.show()):"modalHandlerOk"===t.target.dataset.handler&&e.hide()})}();