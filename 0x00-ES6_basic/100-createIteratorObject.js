export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).flat();
  let index = 0;

  return {
    next() {
      if (index < employees.length) {
        return { value: employees[index++], done: false };
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
