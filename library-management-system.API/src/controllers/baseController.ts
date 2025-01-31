class BaseController<T> {
    private items: T[] = [];

    create(item: T): T {
        this.items.push(item);
        return item;
    }

    update(id: number, updatedItem: T): T | null {
        const index = this.items.findIndex(item => (item as any).id === id);
        if (index !== -1) {
            this.items[index] = updatedItem;
            return updatedItem;
        }
        return null;
    }

    read(): T[] {
        return this.items;
    }

    readById(id: number): T | null {
        return this.items.find(item => (item as any).id === id) || null;
    }

    delete(id: number): boolean {
        const index = this.items.findIndex(item => (item as any).id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
}

class BookController extends BaseController<Book> {}
class CategoryController extends BaseController<Category> {}
class FineController extends BaseController<Fine> {}
class LibrarianController extends BaseController<Librarian> {}
class ShelfController extends BaseController<Shelf> {}
class TransactionController extends BaseController<Transaction> {}

interface Book {  
    Book_ID : Number;
    Student_ID : Number;
    Title : String; 
    Author : String;
    Publisher : String;
    Year_of_Publication : Date;
    Available_Copies : Number;
    Total_Copies : Number;
    Category_ID : Number;
    Shelf_ID : Number; 
}

interface Category {  
    Category_ID : Number;
    Category_Name : String; 
}

interface Fine {  
    Fine_ID : Number;
    Student_ID : Number;
    Transaction_ID : Number;
    Amount : Number;
    Status : String;
}

interface Librarian {  
    Librarian_ID : Number;
    Name :  String;
    Email : String;
    Phone_Number : Number;
}

interface Shelf { 
     Shelf_ID : Number;
    Shelf_Name : String;
    Category_ID : Number;
    Location : String;
}

interface Transaction {  
    Transaction_ID : Number;
    Student_ID : Number;
    Book_ID : Number;
    Faculty_ID : Number; 
    Borrow_Date : Date;
    Return_Date : Date;
    Fine : Number;
}
