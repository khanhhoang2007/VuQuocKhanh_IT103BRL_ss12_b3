function showMenu() {
  console.log("===== MENU =====");
  console.log("1. Them san pham");
  console.log("2. Sua san pham");
  console.log("3. Xoa san pham");
  console.log("4. Tinh tien");
  console.log("0. Thoat");
}

function addProduct() {
  console.log("Chuc nang them san pham");
}

function editProduct() {
  console.log("Chuc nang sua san pham");
}

function deleteProduct() {
  console.log("Chuc nang xoa san pham");
}

function calculateTotal() {
  let price = 100000;
  let quantity = 2;
  let total = price * quantity;

  console.log("Tong tien:", total);
}

function main() {
  showMenu();

  let choice = 4;

  switch (choice) {
    case 1:
      addProduct();
      break;
    case 2:
      editProduct();
      break;
    case 3:
      deleteProduct();
      break;
    case 4:
      calculateTotal();
      break;
    case 0:
      console.log("Thoat chuong trinh");
      break;
    default:
      console.log("Lua chon khong hop le");
  }
}

main();
