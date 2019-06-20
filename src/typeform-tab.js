var TYPEFORM_FEEDBACK =
  TYPEFORM_FEEDBACK ||
  (function() {
    var _args = {} // private

    function generateCss() {
      var css = `#typeform-embed-container {
        top: 40%;
        right: 0;
        position: fixed;
      }
      #typeform-embed-container .main-button {
        z-index: 2;
        background: #2c2c2c;
        min-height: 118px;
        border-radius: 4px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        opacity: 100;
        transition: all 250ms ease-out;
        position: relative;
        cursor: pointer;
      }
      
      #typeform-embed-container .main-button:hover {
        padding: 0 1px;
        box-shadow: 0 0 35px 2px rgba(0, 0, 0, 0.24);
      }
      
      #typeform-embed-container .main-button img {
        width: 30px;
        height: 30px;
        margin-left: 4px;
      }
      
      #typeform-embed-container .main-button .title {
        transform: rotate(180deg);
        writing-mode: vertical-lr;
        display: block;
        padding: 10px;
        color: white;
        font-size: 14px;
        font-weight: 700;
      }
      
      #typeform-embed-container.active .main-button {
        opacity: 0;
      }
      
      #typeform-embed-container .form {
        transition: all 250ms ease-out;
        opacity: 0;
        width: 400px;
        height: 400px;
        position: fixed;
        right: -400;
        top: 40%;
        border-radius: 2px;
      }
      
      #typeform-embed-container.active .form {
        opacity: 100;
        transform: translateX(-110%);
      }
      
      #typeform-embed-container .form .close {
        padding: 5px 10px;
        background: rgb(51, 51, 51);
        color: white;
        position: absolute;
        top: -14px;
        right: 15px;
        border-radius: 50%;
        z-index: 2;
        display: block;
        cursor: pointer;
      }
      
      @media only screen and (max-width: 980px) {
        #typeform-embed-container .main-button {
          min-height: 218px;
        }
      
        #typeform-embed-container .main-button .title {
          font-size: 24px;
          padding: 90px 20px 20px;
        }
        #typeform-embed-container .main-button .logo {
          position: absolute;
          right: 7px;
          bottom: 20px;
          width: 45px;
          height: 45px;
        }
        #typeform-embed-container .main-button .logo svg {
          transform: scale(1.5) !important;
        }
        #typeform-embed-container .form {
          width: 80%;
          height: 50%;
        }
        #typeform-embed-container.active .form {
          transform: translateX(-64%);
        }
      
        #typeform-embed-container.active .form .close {
          font-size: 24px;
          padding: 12px 20px;
          top: -28px;
        }
      }
      `

      const style = document.createElement('style')
      style.type = 'text/css'
      style.appendChild(document.createTextNode(css))
      document.head.appendChild(style)
    }

    function generateHtml(args) {
      const container = document.createElement('div')
      container.setAttribute('id', 'typeform-embed-container')
      document.body.appendChild(container)

      const mainButton = document.createElement('div')
      mainButton.classList.add('main-button')
      container.appendChild(mainButton)

      const title = document.createElement('span')
      title.classList.add('title')
      title.innerText = _args.title
      mainButton.appendChild(title)

      const logo = document.createElement('span')
      logo.classList.add('logo')
      mainButton.appendChild(logo)

      const logoSvg = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'svg'
      )
      logoSvg.innerHTML =
        '<g fill="none" fill-rule="evenodd"><path style="fill: #FFF;" fill-rule="nonzero" d="M12.555 14.018V12.11h10.779v1.907h-4.315v10.93h-2.15v-10.93z"></path><path d="M19.266 35.497c4.542-.096 7.401-2.99 10.648-6.474s5.613-6.218 5.586-10.946c-.028-4.727-2.26-9.177-5.723-12.692C26.314 1.871 22.677.39 18.182.506 13.687.623 10.837 2.908 7.301 5.97 3.764 9.031.519 11.107.501 15.814c-.02 4.707 2.953 9.754 6.706 13.69 3.753 3.937 7.518 6.09 12.06 5.993h-.001z" style="stroke: #FFF;" stroke-width=".5"></path></g>'
      logoSvg.setAttribute('width', '36')
      logoSvg.setAttribute('height', '36')
      logoSvg.setAttribute('style', 'transform:scale(0.8)')
      logo.appendChild(logoSvg)

      const form = document.createElement('div')
      form.classList.add('form')
      container.appendChild(form)

      const close = document.createElement('div')
      close.classList.add('close')
      close.innerHTML = '&times;'
      form.appendChild(close)

      const iframe = document.createElement('iframe')
      iframe.setAttribute('id', 'typeform-full')
      iframe.setAttribute('width', '100%')
      iframe.setAttribute('height', '100%')
      iframe.setAttribute('frameborder', '0')
      iframe.setAttribute('src', args.url)
      form.appendChild(iframe)

      const embedScript = document.createElement('script')
      embedScript.setAttribute(
        'src',
        'https://public-assets.typeform.com/confab/embed.js'
      )
      embedScript.setAttribute('type', 'text/javascript')
      form.appendChild(embedScript)
    }

    return {
      init: async function(Args) {
        _args = Args
        await generateCss()
        await generateHtml(_args)

        const container = document.querySelector('#typeform-embed-container')
        const button = container.querySelector('.main-button')
        const form = container.querySelector('.form')
        const close = form.querySelector('.close')

        const openModal = () => {
          container.classList.add('active')
        }

        const closeModal = () => {
          container.classList.remove('active')
        }

        button.addEventListener('click', openModal)

        close.addEventListener('click', closeModal)
      },
    }
  })()
