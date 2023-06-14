let headerDropDown = Array.from(document.getElementsByClassName('headerDropDown'));
let biGrid3x3GapFill = Array.from(document.getElementsByClassName('bi-grid-3x3-gap-fill'));
let sidebar = Array.from(document.getElementsByClassName('sidebar'));
let sidebarLi = Array.from(document.querySelectorAll('.sidebar>ul>li'));
let searchProjectBtn = Array.from(document.getElementsByClassName('searchProjectBtn'));
let changeSitu = Array.from(document.getElementsByClassName('changeSitu'));
let closeNewsModal = Array.from(document.getElementsByClassName('bi-x'));
let messageModal = Array.from(document.getElementsByClassName('messageModal'));
let biList = Array.from(document.getElementsByClassName('bi-list'));
let addPersonBtn = Array.from(document.getElementsByClassName('addPersonBtn'));
let moreBtn = Array.from(document.getElementsByClassName('moreBtn'));
let customCheckbox = Array.from(document.getElementsByClassName('customCheckbox'));
let deleteLabel = Array.from(document.getElementsByClassName('deleteLabel'));
let addLabel = Array.from(document.getElementsByClassName('addLabel'));
let userIcon=Array.from(document.getElementsByClassName('userIcon'));
let BellIcon=Array.from(document.getElementsByClassName('BellIcon'));
let bicardtext=Array.from(document.getElementsByClassName('bicardtext'));
let tabsContent=Array.from(document.getElementsByClassName('tabsContent'));
let tabsContent2=Array.from(document.getElementsByClassName('tabsContent2'));
let tabs=Array.from(document.getElementsByClassName('tabs'));
let tabs2=Array.from(document.getElementsByClassName('tabs2'));
let uploadBtn =Array.from(document.getElementsByClassName('uploadBtn'));

tabs.forEach((tab) => {
    tab.addEventListener('click', function() {
        let tabId = tab.dataset.id;
        tabs.forEach((tabs) => {tabs.classList.remove('active')});
        tab.classList.add('active');
        tabsContent.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        })
    })
})
tabs2.forEach((tab) => {
    tab.addEventListener('click', function() {
        let tabId = tab.dataset.id;
        tabs2.forEach((tabs) => {tabs.classList.remove('active')});
        tab.classList.add('active');
        tabsContent2.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        })
    })
})
uploadBtn.forEach((item)=>{
    item.addEventListener('click',function () {
        document.querySelector('#uploadModal').classList.add('active');
        document.getElementById('overlay').classList.add('active');
        document.getElementById('overlay').addEventListener('click', function () {
            document.getElementById('uploadModal').classList.remove('active')
            document.getElementById('overlay').classList.remove('active')
        })
        document.getElementById('closeUploadModal').addEventListener('click', function () {
            document.getElementById('uploadModal').classList.remove('active')
            document.getElementById('overlay').classList.remove('active')
        })
    })
})
customCheckbox.forEach((item) => {
    item.addEventListener('click', function () {
        item.classList.toggle('unactive');
    })
})

biList.forEach((item) => {
    item.addEventListener('click', function () {
        item.nextElementSibling.nextElementSibling.classList.toggle('active')
    })
})



uploadBtn.forEach((item)=>{
    item.addEventListener('click',function () {
        document.querySelector('#uploadModal').classList.add('active');
        document.getElementById('overlay').classList.add('active');
        document.getElementById('overlay').addEventListener('click', function () {
            document.getElementById('uploadModal').classList.remove('active')
            document.getElementById('overlay').classList.remove('active')
        })
        document.getElementById('closeUploadModal').addEventListener('click', function () {
            document.getElementById('uploadModal').classList.remove('active')
            document.getElementById('overlay').classList.remove('active')
        })
    })
})

tabs.forEach((tab) => {
    tab.addEventListener('click', function() {
        let tabId = tab.dataset.id;
        tabsContent.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        })
    })
})

addLabel.forEach((item) => {
    item.addEventListener('click', function () {
        let template = `
        <div>
          <div class="d-flex align-items-center justify-content-between border-dash py-2">
              <div class="d-flex align-items-center gap-1">
                 <input class="form-control" value="">
                 <div class="w-5 h-5 position-relative">
                    <div
                      class="w-100 h-100 bg-white cursor rounded-3 border-gray position-absolute top-0 end-0 bottom-0 start-0">
                    </div>
                    <input type="color" class=" w-5 h-5 cursor" style="opacity: 0;">
              </div>
          </div>
          <div class="d-flex align-items-center gap-2">
            <div class="bg-success w-4 h-4 p-1 customCheckbox cursor rounded-1 position-relative">
                <div class="bg-white w-50 h-100"></div>
                <input type="checkbox" style="opacity: 0;"
                    class="position-absolute cursor w-4 h-4 top-0 start-0 end-0 bottom-0">
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                class="bi bi-x cursor text-danger deleteLabel" viewBox="0 0 16 16">
                <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
           </div>
          </div>
        </div>
        `;
        item.previousElementSibling.innerHTML += template;
    })
})

deleteLabel.forEach((item) => {
    item.addEventListener('click', function () {
        item.parentElement.parentElement.remove();
    })
})

moreBtn.forEach((item) => {
    item.addEventListener('click', function () {
        item.previousElementSibling.classList.add('active');
        item.innerText='نمایش کمتر';
    })
})

addPersonBtn.forEach((item) => {
    item.addEventListener('click', function () {
        item.nextElementSibling.classList.toggle('active')
    })
})

document.getElementById('overlay').addEventListener('click',function () {
    this.classList.remove('active')
    messageModal.forEach((item)=>{
        item.classList.remove('active')
    })
})
changeSitu.forEach(item => {
    item.addEventListener('click', function () {
        document.getElementById('overlay').classList.add('active');
        item.querySelector('.messageModal').classList.add('active')
    })
})
searchProjectBtn.forEach((item)=>{
    item.addEventListener('click',function () {
        item.nextElementSibling.classList.toggle('active');
    })
})

biGrid3x3GapFill.forEach(item => {
    item.addEventListener('click', function () {
        sidebar.forEach(item => {
            item.classList.toggle('active')
        })
    })
})

headerDropDown.forEach(element => {
    element.addEventListener('click', function () {
        element.nextElementSibling.nextElementSibling.classList.toggle('active');
        // document.addEventListener('click', (event) => {
        //     if (!event.target.closest('.headerDropDownlists')) {
        //      document.querySelector('header ul').classList.remove('active')
        //     }
        // })
    })
});

document.querySelectorAll('.searchIcon').forEach((item)=>{
    item.addEventListener('click',function () {
        item.nextElementSibling.classList.toggle('active');
    })
})
userIcon.forEach((item)=>{
    item.addEventListener('click',function () {
        item.parentElement.parentElement.nextElementSibling.classList.toggle('active')
    })
})
BellIcon.forEach((item)=>{
    item.addEventListener('click',function () {
        item.parentElement.parentElement.parentElement.nextElementSibling.classList.toggle('active')
    })
})
bicardtext.forEach((item)=>{
    item.addEventListener('click',function () {
        document.getElementById('newsModal').classList.toggle('active')
        document.getElementById('overlay').classList.toggle('active')
        document.getElementById('closeNewsModal').addEventListener('click', function () {
            document.getElementById('newsModal').classList.remove('active')
            document.getElementById('overlay').classList.remove('active')
        })
        document.getElementById('overlay').addEventListener('click', function () {
            document.getElementById('newsModal').classList.remove('active')
            document.getElementById('overlay').classList.remove('active')
        })
    })
})
sidebarLi.forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.submenu').forEach(items => { items.classList.remove('active') });
        document.querySelectorAll('.sidebar svg').forEach(items => { items.classList.remove('active') });
        item.querySelector('.submenu').classList.toggle('active');
        item.querySelector('svg').classList.toggle('active');
    })
})

document.getElementById('karbargBtn').addEventListener('click',function () {
    document.querySelector('#karbargModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.getElementById('overlay').addEventListener('click', function () {
        document.getElementById('karbargModal').classList.remove('active')
        document.getElementById('overlay').classList.remove('active')
    })
})