import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  status: 'idle',
  error: null,
 
};



export const getUsers = createAsyncThunk('createUser', async ({email,password}) => {
  try {
    const response = await axios.post(
      'http://localhost:6010/user/adduser',
      { email,password },
      // { headers: { 'Content-Type': 'application/json' } }
    );
    console.log(response,"data")
    return response
  } catch (error) {
    return error;
  }
});



// export const createUser = createAsyncThunk('createUser', async ({ title, members, userId }) => {
//   try {
//     const response = await axios.post(
//       'https://api.bracketocracy.com/v1.0/api.php?query=league/createLeague',
//       {
//         title,
//         members,
//         userId,
//         allowInvitation: 0,
//       },
//       {
//         headers: { 'Content-Type': 'application/json' },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// });



const loginSlice = createSlice({
  name: 'leagues',
  initialState,
  reducers: {
    
    // toggleModal: (state) => {
     
    //   state.openModal = !state.openModal;
    // },
    
    // toggleMembers: (state, action) => {
     
    //   state.leagues = state.leagues.map((league) =>
    //     league.id === action.payload ? { ...league, isOpen: !league.isOpen } : league
    //   );
    // },
  },
  
   
  extraReducers: (builder) => {
    builder
      // .addCase(createUser.pending, (state) => {
        
      //   state.status = 'loading';
      // })
      // .addCase(createUser.fulfilled, (state, action) => {
       
      //   state.status = 'idle';
      //   state.users = action.payload;
      // })
      // .addCase(createUser.rejected, (state, action) => {
       
      //   state.status = 'error';
      //   state.error = action.error.message;
      // })
      .addCase(getUsers.pending, (state) => {
        
        state.status = 'loading';
      })
      .addCase(getUsers.fulfilled, (state, action) => {
       
        state.status = 'idle';
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
       
        state.status = 'error';
        state.error = action.error.message;
      })
      
  },
});



export default loginSlice.reducer;