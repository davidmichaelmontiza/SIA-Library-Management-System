
class BaseController<T> {
    private data: T[] = [];

    create(item: T): T {
        this.data.push(item);
        return item;
    }

    update(id: number, updatedItem: T): T | null {
        const index = this.data.findIndex(item => (item as any).id === id);
        if (index !== -1) {
            this.data[index] = updatedItem;
            return updatedItem;
        }
        return null;
    }

    read(): T[] {
        return this.data;
    }

    readById(id: number): T | null {
        const item = this.data.find(item => (item as any).id === id);
        return item || null;
    }

    delete(id: number): boolean {
        const index = this.data.findIndex(item => (item as any).id === id);
        if (index !== -1) {
            this.data.splice(index, 1);
            return true;
        }
        return false;
    }
}
