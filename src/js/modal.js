
$modal = function (options) {
    var
        _elemModal,
        _eventShowModal,
        _eventHideModal,
        _hiding = false,
        _destroyed = false,
        _animationSpeed = 200;

    function _createModal(options) {
        var
            elemModal = document.createElement('div'),
            modalTemplate = '<div class="modal__backdrop" data-dismiss="modal"><div class="modal__content"><div class="modal__header"><div class="modal__title" data-modal="title">{{title}}</div></div><div class="modal__body" data-modal="content">{{content}}</div>{{footer}}</div></div>',
            modalFooterTemplate = '<div class="modal__footer">{{buttons}}</div>',
            modalButtonTemplate = '<button type="button" class="{{button_class}}" data-handler={{button_handler}}>{{button_text}}</button>',
            modalHTML,
            modalFooterHTML = '';

        elemModal.classList.add('modal');
        modalHTML = modalTemplate.replace('{{title}}', options.title || 'Новое окно');
        modalHTML = modalHTML.replace('{{content}}', options.content || '');
        if (options.footerButtons) {
            for (var i = 0, length = options.footerButtons.length; i < length; i++) {
                var modalFooterButton = modalButtonTemplate.replace('{{button_class}}', options.footerButtons[i].class);
                modalFooterButton = modalFooterButton.replace('{{button_handler}}', options.footerButtons[i].handler);
                modalFooterButton = modalFooterButton.replace('{{button_text}}', options.footerButtons[i].text);
                modalFooterHTML += modalFooterButton;
            }
            modalFooterHTML = modalFooterTemplate.replace('{{buttons}}', modalFooterHTML);
        }
        modalHTML = modalHTML.replace('{{footer}}', modalFooterHTML);
        elemModal.innerHTML = modalHTML;
        document.body.appendChild(elemModal);
        return elemModal;
    }

    function _showModal() {
        if (!_destroyed && !_hiding) {
            _elemModal.classList.add('modal__show');
            document.dispatchEvent(_eventShowModal);
        }
    }

    function _hideModal() {
        _hiding = true;
        _elemModal.classList.remove('modal__show');
        _elemModal.classList.add('modal__hiding');
        setTimeout(function () {
            _elemModal.classList.remove('modal__hiding');
            _hiding = false;
        }, _animationSpeed);
        document.dispatchEvent(_eventHideModal);
    }

    function _handlerCloseModal(e) {
        if (e.target.dataset.dismiss === 'modal') {
            _hideModal();
        }
    }

    _elemModal = _createModal(options || {});


    _elemModal.addEventListener('click', _handlerCloseModal);
    _eventShowModal = new CustomEvent('show.modal', { detail: _elemModal });
    _eventHideModal = new CustomEvent('hide.modal', { detail: _elemModal });

    return {
        show: _showModal,
        hide: _hideModal,
        destroy: function () {
            _elemModal.parentElement.removeChild(_elemModal),
                _elemModal.removeEventListener('click', _handlerCloseModal),
                _destroyed = true;
        },
        setContent: function (html) {
            _elemModal.querySelector('[data-modal="content"]').innerHTML = html;
        },
        setTitle: function (text) {
            _elemModal.querySelector('[data-modal="title"]').innerHTML = text;
        }
    }
};


(function () {
    var elemTarget;
    var modal = $modal({
      title: 'Signup For Free',
      content: `<form action="#">
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
  </form>`,
      footerButtons: [
        { class: 'button button-contact button-shadow', text: 'Send', handler: 'modalHandlerOk' },
      ]
    });
 
    document.addEventListener('click', function (e) {
      if (e.target.dataset.toggle === 'modal') {
        elemTarget = e.target;
        modal.show();
      } else if (e.target.dataset.handler === 'modalHandlerOk') {
        modal.hide();
      } 
    });
  })();

  (function () {
    var elemTarget;
    var modal = $modal({
      title: 'Successfully! We will send early access soon.',
    });
 
    document.addEventListener('click', function (e) {
      if (e.target.dataset.toggle === 'modal-success') {
        elemTarget = e.target;
        modal.show();
      } else if (e.target.dataset.handler === 'modalHandlerOk') {
        modal.hide();
      } 
    });
  })();