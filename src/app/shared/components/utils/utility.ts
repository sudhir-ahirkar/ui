export class Utility {
    static filterArrayByKeyAndValue(items: any[], key: any, value: any): any[] {
        return items.filter(function (item) {
            return item[key] === value;
        });
    }

    static filterArrayByKeyAndArray(items: any[], key: any, value: any[]): any[] {
        return items.filter(function (item) {
            return value.includes(item[key]);
        });
    }

    static getObjectFromArrayByKeyAndValue(items: any[], key: any, value: any): any {
        const list = items.filter(function (item) {
            return item[key] === value;
        });
        if (list.length === 1) {
            return list[0];
        }
        if (list.length <= 0) {
            return null;
        }
        if (list.length > 1) {
            throw new Error('The specified array has multiple objects with key: ' + key + ' and value: ' + value);
        }
        return null;
    }

    static isEmpty(value: string): boolean {
        if (value === undefined || value === null || value === '') {
            return true;
        }
        return false;
    }
    static transformDateToString(date) {
        if (date) {
            return new Date(date).getFullYear() + '-' + ('0' + (new Date(date).getMonth() + 1)).slice(-2) +
                '-' + ('0' + new Date(date).getDate()).slice(-2);
        } else {
            return date;
        }
    }

    setProperty(array: any[], field: string, value) {
        array.forEach((obj: any) => {
            obj[field] = value;
        });
    }
}
