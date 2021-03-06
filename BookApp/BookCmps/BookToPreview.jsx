import BookPreview from './BookPreview.jsx';

export function Books(props) {

    
    
    const books = [
        {
            id: 'OXeMG8wNskc',
            title: 'metus hendrerit',
            subtitle: 'mi est eros convallis auctor arcu dapibus himenaeos',
            authors: ['Barbara Cartland'],
            publishedDate: 1999,
            description:
              ' loaskdjhaksjdhkajsdhkjashdkajsdkjh sdfgdfkjghldkfh kjhdkjfgh dfkjhkdf dfjkghd aksjasj lkxjckcvjlsd sdjkcsjcn sdjbasklakxlaksnxlnkn knkdlnkvnlkdn knlkd nkdnf klds knd lknk ndlkfn ldknlskn klsn klsnl knl kn lskn lksndlkn lknsldk nlksnd lknd placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse',
            pageCount: 713,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/20.jpg',
            language: 'en',
            listPrice: {
              amount: 109,
              currencyCode: 'EUR',
              isOnSale: false,
            },
          },
          {
            id: 'JYOJa2NpSCq',
            title: 'morbi',
            subtitle: 'lorem euismod dictumst inceptos mi',
            authors: ['Barbara Cartland'],
            publishedDate: 1978,
            description:
              'aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor',
            pageCount: 129,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/14.jpg',
            language: 'sp',
            listPrice: {
              amount: 44,
              currencyCode: 'EUR',
              isOnSale: true,
            },
          },
          {
            id: '1y0Oqts35DQ',
            title: 'at viverra venenatis',
            subtitle: 'gravida libero facilisis rhoncus urna etiam',
            authors: ['Dr. Seuss'],
            publishedDate: 1999,
            description:
              'lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant',
            pageCount: 972,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/2.jpg',
            language: 'he',
            listPrice: {
              amount: 108,
              currencyCode: 'ILS',
              isOnSale: false,
            },
          }
    ]
    return (

        
        <div className="BooksContainer">
           { books.map((book) => (
            <BookPreview book={book} key={book.id}></BookPreview>
           ))}
        </div>
       
    )

}