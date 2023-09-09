 // Veri koleksiyonu örneği (sizin verilerinize uygun bir yapı kullanmalısınız)
 const data = [
  "Front end developer olarak iş aramaktayım",
  "Çeşitli projeler yaptım",
  "Başarılı olacağıma inanıyorum",
  "kendimi profesyonelce geliştirmek istiyorum"
];

const filterInput = document.getElementById("filterInput");
const resultsList = document.getElementById("results");

// Seçilen öğeyi saklamak için bir değişken
let selectedListItem = null;

const colorOptions = ["yellow", "lightblue", "lightgreen", "pink", "lightcoral"];

// Metin filtresini dinle
filterInput.addEventListener("input", function() {
  const searchText = filterInput.value.toLowerCase();

  // Sonuçları temizle
  resultsList.innerHTML = "";

  // Verileri filtrele ve sonuçları göster
  data.forEach(function(item) {
    if (item.toLowerCase().includes(searchText)) {
      const listItem = document.createElement("li");
      listItem.textContent = item;
          

        
        
        // Öğeye tıklanabilirlik ekleyin
        listItem.addEventListener("click", function() {
              // Önceki seçilen öğeyi temizle
              if (selectedListItem) {
                selectedListItem.classList.remove("selected");
              }
              
              // Seçilen öğenin arka plan rengini ayarlayın
              listItem.classList.add("selected");
              
              // Seçilen öğeyi sakla
              selectedListItem = listItem;
            });

            resultsList.appendChild(listItem);
      }
      
      
    
    });
    const items = resultsList.querySelectorAll("li");
    if (items.length > 0) {
        const lastItem = items[items.length - 1];
        lastItem.click();
    }
  });

  