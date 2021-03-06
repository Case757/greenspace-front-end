import { combineReducers } from "redux";


const userReducer = (state = null, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return action.payload;
        case "CREATE_USER":
            return action.payload;
        case "LOGOUT_USER":
            return null
        default:
            return state;
    }
};

const searchHomeTextReducer = (state = "", action) => {
    switch (action.type) {
        case "CHANGE_HOME_SEARCH_TEXT":
            return action.payload;
        default:
            return state;
    }
  };

  const searchIndexTextReducer = (state = "", action) => {
    switch (action.type) {
        case "CHANGE_INDEX_SEARCH_TEXT":
            return action.payload;
        default:
            return state;
    }
  };

const notesReducer = (currentNotes = [], action) => {
    switch (action.type) {
        case "FETCH_NOTES":
            return action.payload
        case "DELETE_NOTE":
            return currentNotes.filter(note => note.id !== action.payload.id)
        case "CREATE_NOTE":
            if (currentNotes) {
            return [...currentNotes, action.payload]
            }
            else {
                return [action.payload]
            }
        default:
            return currentNotes
    }
}
const plantsReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_PLANTS":
            return action.payload
        case "CREATE_PLANT":
            return state
        default:
            return state
    }
}

const userPlantsReducer = (currentUserPlants = [], action) => {
    
    switch (action.type) {
        case "FETCH_USER_PLANTS":
            return action.payload
        case "DELETE_USER_PLANT":
            return currentUserPlants.filter(userplant => userplant.id !== action.payload.id)
        case "ADD_USER_PLANT":
            if (currentUserPlants) {
            return [...currentUserPlants, action.payload]
            }
            else {
                return [action.payload]
            }
        case "UPDATE_USER_PLANT":
            return currentUserPlants.map(userPlant => {
                if (userPlant.id === action.payload.id) {
                    return action.payload
                } else {
                    return userPlant
                }
            })
        default:
            return currentUserPlants
    }
}

const wateringsReducer = (currentWaterings = [], action) => {
    switch (action.type) {
        case "FETCH_WATERINGS":
            return action.payload
        case "CREATE_WATERING":
            if (currentWaterings) {
                return [...currentWaterings, action.payload]
                }
            else {
                return [action.payload]
            }

        default:
            return currentWaterings
    }
}

const fertilizingsReducer = (currentFertilizings = [], action) => {
    switch (action.type) {
        case "FETCH_FERTILIZINGS":
            return action.payload
        case "CREATE_FERTILIZING":
            if (currentFertilizings) {
                return [...currentFertilizings, action.payload]
                }
            else {
                return [action.payload]
            }

        default:
            return currentFertilizings
    }
}



const rootReducer = combineReducers({
    currentUser: userReducer,
    currentPlants: plantsReducer,
    currentUserPlants: userPlantsReducer,
    currentNotes: notesReducer,
    currentWaterings: wateringsReducer,
    currentFertilizings: fertilizingsReducer,
    searchHomeText: searchHomeTextReducer,
    searchIndexText: searchIndexTextReducer

})

export default rootReducer