//api
export const PRODUCT_URL = "http://localhost:5000/product"
export const USER_URL = "http://localhost:5000/user"
export const ORDER_URL = "http://localhost:5000/order"

//action:type
export const UPDATE_PRODUCT_LIST = 'UPDATE_PRODUCT_LIST'
export const SEARCH_KEYWORD = 'SEARCH_KEYWORD'
export const PRICE_FILTER = 'PRICE_FILTER'
export const SORTING = 'SORTING'

export const ADD_TO_TEMP_SELECTED = 'ADD_TO_TEMP_SELECTED'

export const UPDATE_CART_LIST = 'UPDATE_CART_LIST'
export const EDIT_CART_QTY = 'EDIT_CART_QTY'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const CLEAR_ALL_ITEM = 'CLEAR_ALL_ITEM'

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const SAVE_ADDRESS = 'SAVE_ADDRESS'

export const GET_RECENT_ORDERS = 'GET_RECENT_ORDERS'
export const GET_LAST_YEAR_ORDERS = 'GET_LAST_YEAR_ORDERS'
export const GET_OLDER_ORDERS = 'GET_OLDER_ORDERS'

//home:
export const SEED_PRICE_DATA = [
    {id: 1, value: 500, label: '$0-$500'},
    {id: 2, value: 1000, label: '$500-$1000'},
    {id: 3, value: 1500, label: '$1000-$1500'},
    {id: 4, value: 2000, label: '$1500-$2000'},
    {id: 5, value: 2500, label: '$2000-$2500'},
    {id: 6, value: 9999, label: 'Above $2500'},
]

export const SEED_MATERIAL_DATA = [
    {id: 1, value: 'Fabric', label: 'Fabric'},
    {id: 2, value: 'Leather', label: 'Leather'},
    {id: 3, value: 'Plastic', label: 'Plastic'},
    {id: 4, value: 'Combination', label: 'Combination'},
    {id: 5, value: 'Epic', label: 'Epic'},
    {id: 6, value: 'MCL Leather', label: 'MCL Leather'}
]

export const SEED_SORT_BY_ARR = [
    {value: 'price high to low', option: "Price: High to Low"},
    {value: 'price low to high', option: "Price: Low to High"},
    {value: 'name a to z', option: "Name: A to Z"},
    {value: 'name z to a', option: "Name: Z to A"},
    {value: 'rating', option: "Average Rating"}
]

//navigation:
export const CATEGORIES = [
    {
        cateName: 'Office',
        link: "/home",
        subCategories: ['Office Chairs', 'Side Chairs', 'Stool Chairs', 'Desk|Sit-to-Stand|Tables', 'Storage', 'Desk Accessories', 'Lighting', 'Replacement Parts', 'View All']
    },
    {cateName: 'Living', link: "/living", subCategories: []},
    {cateName: 'Dining', link: "/dining", subCategories: []},
    {cateName: 'Bedroom', link: "/bedroom", subCategories: []},
    {cateName: 'Outdoor', link: "/outdoor", subCategories: []},
    {cateName: 'Lighting', link: "/lighting", subCategories: []},
    {cateName: 'Accessories', link: "/accessories", subCategories: []},
    {cateName: 'Gaming', link: "/gaming", subCategories: []}]

export const LOGO_IMG_URL = "http://mfs.mark2win.com/static/media/logo.a567ab07.svg"
export const LOGO_IMG_SMALL_URL = "http://mfs.mark2win.com/static/media/logo-small.a87100bc.svg"

//product:
export const SEED_DATA = {
    productName: 'Low-Back Cosm Chair',
    designer: 'Studio 5.0',
    currency: 'CAD',
    price: '1848.00',
    highlights: ['12-Year Warranty', 'Free Standard Shipping', '30-Day No Hassle Return'],
    carriageExpense: '0'
}

export const THEME_COLOR = 'rgb(226, 45, 0)'
export const CARRIAGE_COLOR = 'rgb(204, 51, 30)'

export const KEY_FEATURES = [
    '12-Year Warranty',
    'Named 100 Best Inventions By Time Magazine In 2019',
    'Auto-Harmonic™ Tilt Mechanism Automatically Adjusts',
    'Flexible Frame',
    'Continuous And Breathable Seat And Back',
    'One Adjustment For Height',
    'Wrap-Top Facilitates Casual Collaboration',
    'Available In Three Arm Styles: Fixed, Fully Adjustable, And Leaf',
    'Dipped-In-Color Option',
    'Made In Michigan At A 100% Green-Energy Facility',
    'For Questions About Lead Times, In-Stock Options Or Delivery Please Give Usa Call At 888.798.0202.']

//footer:
export const FOOTER_DATA = [
    {
        title: 'Customer Service',
        items: [
            'Contact Us',
            'FAQ',
            'Returns and Exchanges',
            'Shipping and Delivery',
            'Warranty and Service',
            'Assembly Instructions',
            'Care and Maintenance',
            'Site Feedback',
            'Track Your Order',
            'Nelson Product Recall',
            'Our Response to COVID-19',
        ]
    }, {
        title: 'Resources',
        items: [
            'For Business',
        ]
    }, {
        title: 'Location',
        items: [
            'Find a Retailer',
            'Our New York Store',
        ]
    }, {
        title: 'About Herman Miller',
        items: [
            'About Us',
            'HermanMiller.com',
            'Our Designs',
            'Request A Catalog',
            'Careers',
            'Accessibility Statement',
            'Terms of Sales',
            'Privacy Notice',
            'Cookie Notice',
            'Do Not Sell My Information',
            'Site Map',
        ]
    },
]
export const FOOTER_MAILLIST = [
    'Join our mailing list'
]
export const FOOTER_MAILLIST_BUTTON = [
    'Sign Up'
]
export const FOOTER_FOLLOWLIST = [
    'Follow Us'
]

export const CANADA_FLAG_URL = "http://mfs.mark2win.com/static/media/Canada-flag.c9d19c1f.png"
