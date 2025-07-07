# Episode 12 - Let's build our store

## 01 - UI Layer and data layer

- React mein UI Layer aur Data Layer dono alag cheezein hain, aur inka separation maintain karna best practice maana jaata hai. Yeh dono layers kaam kaise karti hain, yeh samajhna important hai:

### UI Layer (View Layer)

- React ka main kaam UI render karna hai—yaani jo user screen par dekhta hai, jaise buttons, lists, images, etc. Yeh layer sirf data ko present karti hai aur user input handle karti hai, jaise button click ya form submit.
- UI Layer ka kaam sirf dikhana hai, data ko fetch ya store karna nahi.
- Example: Agar aap ek Dashboard bana rahe ho, toh DashboardDetail component sirf data lega (props ke through) aur dikhayega.

### Data Layer

- Data Layer ka kaam hai data ko fetch, store, aur manage karna—jaise API se data lana, state management (Redux, Context API, etc.) handle karna.
- Data Layer business logic, data transformation, aur API calls handle karti hai. UI Layer ko sirf woh data milta hai jo dikhana hai.
- Example: Aapka "smart component" ya container component API se data fetch karega, state mein store karega, aur phir woh data presentational (UI) components ko dega.

## 02 - Redux

- Redux ek state management library hai jo React applications mein use hoti hai. Iska main purpose hai application state ko manage karna aur components ke beech data sharing ko asaan banana.
- Redux mein teen main concepts hote hain: Store, Actions, aur Reducers.
- Redux is not mandatory use it wisely, lekin yeh large applications mein state management ko simplify karne ke liye bahut useful hai.

**Similar type of library also `Zustand` which also gaining popularity.**

### Store

- Store application ka central place hai jahan saari state rakhi jaati hai. Yeh ek single source of truth hai.
- Store ko create karne ke liye `createStore` function ka use hota hai.

### Actions

- Actions plain JavaScript objects hote hain jo state ko change karne ke liye dispatch kiye jaate hain.
- Har action mein ek `type` property hoti hai jo action ka naam batata hai, aur optional `payload` property hoti hai jo additional data carry karti hai.

### Reducers

- Reducers pure functions hote hain jo current state aur action ko lete hain aur naya state return karte hain.
- Reducers ko combine karne ke liye `combineReducers` function ka use hota hai.

### Redux Flow

1. User koi action trigger karta hai (jaise button click).
2. Action dispatch hota hai store ko.
3. Store action ko reducers ko bhejta hai.
4. Reducers current state aur action ko lete hain aur naya state return karte hain.
5. Store naya state ko update karta hai aur subscribed components ko re-render karta hai.

### Example

- Agar aap ek UserList component bana rahe ho, toh yeh component API se user data fetch karega, state mein store karega, aur phir UserItem (presentational component) ko woh data pass karega.
- Redux ka use karte hue, aap ek action create karenge jaise `FETCH_USERS`, jo API se data fetch karega. Reducer is action ko handle karega aur user data ko store mein update karega.
- UserList component is store se data ko subscribe karega aur jab bhi state change hogi, yeh re-render hoga.

## 03 - Redux Toolkit and react-redux

### Redux Toolkit

- Redux Toolkit Redux ka official, opinionated, aur recommended way hai state management ke liye. Yeh Redux ko use karna asaan banata hai aur boilerplate code ko reduce karta hai.
- Isme kuch built-in features hote hain jaise `createSlice`, `configureStore`, aur `createAsyncThunk` jo Redux ke saath kaam karna asaan banate hain.

### react-redux

- `react-redux` ek official library hai jo React components ko Redux store ke saath connect karne ke liye use hoti hai. Yeh components ko store se data subscribe karne aur actions dispatch karne ki suvidha deti hai.
- Isme `Provider` component hota hai jo Redux store ko React application ke context mein provide karta hai, aur `useSelector` aur `useDispatch` hooks hote hain jo components ko store se data access karne aur actions dispatch karne ki suvidha dete hain.

## 04 - Packages Installation

### Install Redux Toolkit

```bash
npm install @reduxjs/toolkit
```

### Install react-redux

```bash
npm install react-redux
```

### In-Single command

```bash
npm install @reduxjs/toolkit react-redux
```

## 05 - Create Redux Store

### Create a Redux Store

appStore.js

```javascript
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // your reducers go here
  },
});

export default store;
```

### Provider Setup

main.js

```javascript
import React from 'react';
import { Provider } from 'react-redux';
import store from './appStore';

const App = () => {
  return (
    <Provider store={store}>
      {/* Your components go here */}
    </Provider>
  );
};

export default App;
```

### Create a Slice

createSlice.js

```javascript
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
```

### Update Store Configuration

appStore.js

```javascript
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './createSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
```

### Use Selector and Dispatch in Components

component.js

```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from './createSlice';

const UserList = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    dispatch(setUsers(data));
  };

  return (
    <div>
      <button onClick={fetchUsers}>Fetch Users</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
```

#### Selector and Dispatch Hooks

- `useSelector`: Yeh hook Redux store se state ko access karne ke liye use hota hai. Iska use karke aap specific state slice ko read kar sakte hain.
- `useDispatch`: Yeh hook Redux store ko update karne ke liye actions dispatch karne ke liye use hota hai.

### Summary

- React mein UI Layer aur Data Layer ka separation maintain karna best practice hai.
- Redux ek powerful state management library hai jo large applications mein state ko manage karne mein madad karti hai.
- Redux Toolkit aur react-redux Redux ke saath kaam karna asaan banate hain.
- Redux store create karne ke liye `configureStore` ka use hota hai, aur components ko store se connect karne ke liye `Provider`, `useSelector`, aur `useDispatch` hooks ka use hota hai.
- Redux slices create karne ke liye `createSlice` ka use hota hai, jo reducers aur actions ko ek saath manage karta hai.
- Redux mein actions, reducers, aur store ka flow samajhna important hai, jisse aap apne application ki state ko efficiently manage kar sakte hain.
