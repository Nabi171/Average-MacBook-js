// extra-momorysSection 
document.getElementById('extra-momorybtn').addEventListener('click', function () {
    const memoryNeed = document.getElementById('exta-memory');
    memoryNeed.innerText = 180;
    const totalPrice = document.getElementById('total-price');
    const memoryNeedone = document.getElementById('exta-memory');
    const memoryNeedtwo = document.getElementById('exrtra-storage');
    const memoryNeedthree = document.getElementById('extra-cost');
    totalPrice.innerText = parseFloat(memoryNeedone.innerText) + parseFloat(memoryNeedtwo.innerText) + parseFloat(memoryNeedthree.innerText) + 1299;
    const finaltotal = document.getElementById('total-spending');
    finaltotal.innerText = totalPrice.innerText;

});
document.getElementById('copun-btn').addEventListener('click', function () {
    const inputfild = document.getElementById('copun-input');
    const inputfildtext = inputfild.value;
    if (inputfildtext === 'secret') {
        const finaltotal = document.getElementById('total-spending');
        finaltotal.innerText = parseFloat(finaltotal.innerText) * (0.8);
        inputfild.value = '';
    }

}

)
document.getElementById('extra-momorybtnone').addEventListener('click', function () {
    const memoryNeed = document.getElementById('exta-memory');
    memoryNeed.innerText = 0;
    const totalPrice = document.getElementById('total-price');
    const memoryNeedone = document.getElementById('exta-memory');
    const memoryNeedtwo = document.getElementById('exrtra-storage');
    const memoryNeedthree = document.getElementById('extra-cost');
    totalPrice.innerText = parseFloat(memoryNeedone.innerText) + parseFloat(memoryNeedtwo.innerText) + parseFloat(memoryNeedthree.innerText) + 1299;
    const finaltotal = document.getElementById('total-spending');
    finaltotal.innerText = totalPrice.innerText;
});

// Storage-Section 
document.getElementById('extra-storagebtn').addEventListener('click', function () {
    const memoryNeed = document.getElementById('exrtra-storage');
    memoryNeed.innerText = 0;
    const totalPrice = document.getElementById('total-price');
    const memoryNeedone = document.getElementById('exta-memory');
    const memoryNeedtwo = document.getElementById('exrtra-storage');
    const memoryNeedthree = document.getElementById('extra-cost');
    totalPrice.innerText = parseFloat(memoryNeedone.innerText) + parseFloat(memoryNeedtwo.innerText) + parseFloat(memoryNeedthree.innerText) + 1299;
    const finaltotal = document.getElementById('total-spending');
    finaltotal.innerText = totalPrice.innerText;
});
document.getElementById('extra-storagebtnOne').addEventListener('click', function () {
    const memoryNeed = document.getElementById('exrtra-storage');
    memoryNeed.innerText = 100;
    const totalPrice = document.getElementById('total-price');
    const memoryNeedone = document.getElementById('exta-memory');
    const memoryNeedtwo = document.getElementById('exrtra-storage');
    const memoryNeedthree = document.getElementById('extra-cost');
    totalPrice.innerText = parseFloat(memoryNeedone.innerText) + parseFloat(memoryNeedtwo.innerText) + parseFloat(memoryNeedthree.innerText) + 1299;
    const finaltotal = document.getElementById('total-spending');
    finaltotal.innerText = totalPrice.innerText;
});
document.getElementById('extra-storagebtnTwo').addEventListener('click', function () {
    const memoryNeed = document.getElementById('exrtra-storage');
    memoryNeed.innerText = 180;
    const totalPrice = document.getElementById('total-price');
    const memoryNeedone = document.getElementById('exta-memory');
    const memoryNeedtwo = document.getElementById('exrtra-storage');
    const memoryNeedthree = document.getElementById('extra-cost');
    totalPrice.innerText = parseFloat(memoryNeedone.innerText) + parseFloat(memoryNeedtwo.innerText) + parseFloat(memoryNeedthree.innerText) + 1299;
    const finaltotal = document.getElementById('total-spending');
    finaltotal.innerText = totalPrice.innerText;
});

// Delevery-option
document.getElementById('delevery-costbtn').addEventListener('click', function () {
    const memoryNeed = document.getElementById('extra-cost');
    memoryNeed.innerText = 0;
    const totalPrice = document.getElementById('total-price');
    const memoryNeedone = document.getElementById('exta-memory');
    const memoryNeedtwo = document.getElementById('exrtra-storage');
    const memoryNeedthree = document.getElementById('extra-cost');
    totalPrice.innerText = parseFloat(memoryNeedone.innerText) + parseFloat(memoryNeedtwo.innerText) + parseFloat(memoryNeedthree.innerText) + 1299;
    const finaltotal = document.getElementById('total-spending');
    finaltotal.innerText = totalPrice.innerText;
});
document.getElementById('delevery-costbtnTwo').addEventListener('click', function () {
    const memoryNeed = document.getElementById('extra-cost');
    memoryNeed.innerText = 20;
    const totalPrice = document.getElementById('total-price');
    const memoryNeedone = document.getElementById('exta-memory');
    const memoryNeedtwo = document.getElementById('exrtra-storage');
    const memoryNeedthree = document.getElementById('extra-cost');
    totalPrice.innerText = parseFloat(memoryNeedone.innerText) + parseFloat(memoryNeedtwo.innerText) + parseFloat(memoryNeedthree.innerText) + 1299;
    const finaltotal = document.getElementById('total-spending');
    finaltotal.innerText = totalPrice.innerText;
});
