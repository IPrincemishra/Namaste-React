# Episode 09 - Optimising our App

## 01 - Single Responsibilty Principle

- React mein Single Responsibility Principle (SRP) ka matlab hai ki har component ka ek hi clear responsibility ya role hona chahiye—yani, ek component sirf ek kaam kare aur usi ko acche se kare.
- Agar ek component multiple kaam karega, toh uska code complex ho jayega aur maintain karna mushkil ho jayega.
- SRP ka matlab hai ki agar ek component data fetch kar raha hai, toh woh sirf data fetch karega aur UI render karne ka kaam kisi aur component ko de dega.
- Isse code modular aur reusable banta hai, jisse development aur testing asaan ho jata hai.

### SRP ka main point

- Ek component ko sirf ek hi reason hona chahiye change hone ka.
- Agar ek component multiple cheezein karta hai (jaise data fetch karna bhi aur UI render karna bhi), toh woh SRP violate karta hai.

### React mein SRP follow karne ke fayde

- Code modular aur maintainable hota hai—har component chota, focused aur reusable banta hai.
- Readability aur testing easy ho jati hai—developer ko samajhna asaan hota hai ki component kya karta hai.
- Scalability improve hoti hai—bade apps banana asaan ho jata hai.

## 02 - Custom Hook

- Custom Hook ek function hota hai jo React ke built-in hooks (jaise useState, useEffect) ko encapsulate karta hai aur reusable logic provide karta hai.
- Custom Hook ka naam hamesha "use" se shuru hota hai, jaise `useFetchData`, `useLocalStorage`, etc.
- Custom Hook ko create karne ka main maksad hai ki aap apne code ko modular aur reusable bana sakein, jisse aapko baar-baar wahi logic likhna na pade.
- Custom Hook ko use karne se aap apne components ko clean aur focused rakh sakte hain, kyunki aap complex logic ko alag function mein daal dete hain.
- Custom Hook ko use karne ke liye aapko sirf us function ko call karna hota hai, jaise aap built-in hooks ko call karte hain.

### Example of Custom Hook

```javascript
import { useState, useEffect } from 'react';

const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setData(json);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
};
```

### Use of Custom Hook in Component

```javascript
import React from 'react';
import useFetchData from './useFetchData';

const MyComponent = () => {
    const { data, loading, error } = useFetchData('https://api.example.com/data');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Data:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default MyComponent;
```

### Benefits of Custom Hooks

- **Reusability**: Aap ek hi logic ko multiple components mein use kar sakte hain bina baar-baar likhe.
- **Separation of Concerns**: Aap complex logic ko alag rakh sakte hain, jisse components clean aur focused bante hain.
- **Testing**: Custom Hooks ko alag se test karna asaan hota hai, kyunki aap unhe ek function ke roop mein treat kar sakte hain.

## 03 - before to start a creating a custom hook

1. **Identify the Logic**: Sabse pehle, aapko identify karna hoga ki kaunsa logic aapko reusable banana hai. Yeh logic kisi specific component mein ho sakta hai ya phir multiple components mein use ho raha ho.

2. **Create a Function**: Ek naya function banayein jo is logic ko encapsulate kare. Is function ka naam hamesha "use" se shuru hona chahiye, jaise `useFetchData`.

3. **Use React Hooks**: Is function ke andar React ke built-in hooks (jaise `useState`, `useEffect`) ka istemal karein. Yeh hooks aapko state management aur side effects handle karne mein madad karte hain.

4. **Return Values**: Jo bhi values ya functions aapko component mein use karne hain, unhe return karein. Yeh values aapke custom hook ka output hongi.

5. **Use the Custom Hook**: Ab aap is custom hook ko kisi bhi component mein use kar sakte hain, jaise aap built-in hooks ko use karte hain.

```javascript
import useFetchData from './useFetchData';
const MyComponent = () => {
    const { data, loading, error } = useFetchData('https://api.example.com/data');

    // Use data, loading, and error as needed
};
```

## 04 - Custom Hook Example : useOnlineStatus

- Custom Hook `useOnlineStatus` ka istemal aapko yeh jaanne mein madad karta hai ki user online hai ya offline. Yeh hook browser ke online/offline events ko handle karta hai aur current status ko return karta hai.

```javascript
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    // just check online and offline
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener('offline', () => {
            setOnlineStatus(false)
        })
    }, [])

    useEffect(() => {
        window.addEventListener('online', () => {
            setOnlineStatus(true)
        })
    }, [])
    
    return onlineStatus;
}
export default useOnlineStatus;
```

## 05 - Chunking or Code Splitting

- Chunking ya Code Splitting ka matlab hai ki aap apne application ke code ko chhote-chhote parts (chunks) mein todte hain, jisse ki browser sirf zaroori code hi load kare aur baaki code tab load ho jab zaroorat ho.
- Isse initial load time kam hota hai aur user experience improve hota hai, kyunki user ko turant content milta hai aur baaki code background mein load hota hai.
- React mein Code Splitting ke liye aap `React.lazy` aur `Suspense` ka istemal kar sakte hain. Yeh features aapko components ko dynamically load karne ki suvidha dete hain.

### Example of Code Splitting

```javascript
import React, { Suspense, lazy } from 'react';
const LazyComponent = lazy(() => import('./LazyComponent'));

const MyComponent = () => {
    return (
        <div>
            <h1>My Component</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent />
            </Suspense>
        </div>
    );
};
export default MyComponent;
```

- Is example mein, `LazyComponent` ko sirf tab load kiya jayega jab `MyComponent` render hoga. Isse initial load time kam hota hai aur performance improve hoti hai.
- `Suspense` ka `fallback` prop use karke aap loading state ko handle kar sakte hain, jisse user ko loading indicator dikhaya ja sakta hai jab tak component load nahi ho jata.
- Yeh technique especially bade applications mein faydemand hoti hai, jahan aapke paas multiple components aur routes hote hain.
- Isse aapke application ka performance aur user experience dono improve hote hain.
- Yeh technique React ke ecosystem mein widely adopted hai aur aapko apne applications ko efficient aur responsive banane mein madad karti hai.
- Iske alawa, aap React Router ke saath bhi code splitting ka istemal kar sakte hain, jisse aapke routes ke liye alag-alag chunks load hote hain.
- Yeh technique aapko application ke size ko manage karne aur user ko better experience dene mein madad karti hai.
