class Book {
    constructor(
      title,
      author,
      ISBN,
      pubYear,
      pageNumber,
      currentPage
    ) {
      this.title = title;
      this.author = author;
      this.pubYear = pubYear;
      this.pageNumber = pageNumber;
      this.currentPage = currentPage;
    }
    updateCurrentPage(newCurrentPage) {
      this.currentPage = newCurrentPage;
    }

  }
  
  export default Book;