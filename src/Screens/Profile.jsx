import React, { useState ,useEffect} from "react";

import {
  View,
  
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import SwipeButton from "rn-swipe-button";



const Profile = () => {
  const[onswipe,setonswipe]=useState(false)

  const initialIconSource = require("../../assets/icons8-arrow-right-50.png");
  const endIconSource = require("../../assets/icons8-arrow-left.png");

  const CheckinButton = () => {
    return (
      <View style={{ padding: 16, margin: 10 }}>

        <Image
          source={onswipe? endIconSource : initialIconSource}
          style={{ padding: 16, margin: 10, height: 5, width: 10 }}
        />
      </View>
    );
  };
  // const handleSwipeSuccess = () => {
  //   setonswipe(!onswipe);
  //   // setIsSwipeEnabled(false); // Disable swipe after success

  //   console.log('check in');
  //   // Add any additional logic you want to perform on successful swipe
  // };

//   const handleSwipeFail = () => {
//     setonswipe(false);
//     console.log('check out');
// };

const handleSwipeSuccess = () => {
  if (onswipe) {
      // This block will be executed when swiping from left to right (normal swipe)
      setonswipe(false);
      console.log('check out');
  } else {
      // This block will be executed when swiping from right to left (reverse swipe)
      setonswipe(true); // Assuming you want to allow swiping back after 'check in'
      console.log('check in');
      // Add any additional logic you want to perform on reverse swipe
  }
  // setIsSwipeEnabled(false); // Disable swipe after success
};

  
  
  


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4CAF50" />

      <View style={styles.header}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 60,
            overflow: "hidden",
            borderColor: "#00A9FF",
            borderWidth: 2,
          }}
        >
          <Image
            source={require("../../assets/passportsize.jpg")}
            style={{ flex: 1, width: null, height: null, resizeMode: "cover" }} // Set your desired width and height
          />
        </View>

        <View style={{ justifyContent: "center" }}>
          <Text style={styles.empname}>Mohamed Asif</Text>
          <Text style={styles.position}>App developer</Text>
        </View>

        {/* <View style={{ justifyContent: "center",borderRadius:25,borderColor:"#00A9FF"  ,borderWidth:2,height:50,width:50,alignItems:'center',marginTop:6,marginLeft:40,elevation:2}}> */}
        {/* <Image
            source={require("../../assets/icons8-bell-100.png")}
            style={{ width: 30, height: 30,}} // Set your desired width and height
          /> */}

        {/* </View> */}
      </View>

      <View style={styles.calendar}>
        <Text style={styles.month}>January</Text>

        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollViewContent}
        >
          <TouchableOpacity style={styles.item}>
            <Text style={styles.date}>01</Text>
            <Text style={styles.days}>Sun</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text style={styles.date}>02</Text>
            <Text style={styles.days}>Mon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text style={styles.date}>03</Text>
            <Text style={styles.days}>Tue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text style={styles.date}>04</Text>
            <Text style={styles.days}>Wed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text style={styles.date}>05</Text>
            <Text style={styles.days}>Thu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text style={styles.date}>06</Text>
            <Text style={styles.days}>Fri</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text style={styles.date}>07</Text>
            <Text style={styles.days}>Sat</Text>
          </TouchableOpacity>
          {/* Add more items as needed */}
        </ScrollView>
      </View>

      <View style={styles.checkintime}>
        <Text style={styles.todayatt}>Today Attendance</Text>

        <View style={styles.tagContainer}>
          <TouchableOpacity style={styles.tagBox}>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                marginBottom: 10,
                marginRight: 30,
              }}
            >
              <View
                style={{
                  backgroundColor: "#00A9FF10",
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Image
                  source={require("../../assets/icons8-login-rounded-100.png")}
                  style={styles.icon}
                />
              </View>

              <Text style={styles.tagBoxtext}>Check In</Text>
            </View>

            <View
              style={{
                alignItems: "flex-start",
                marginRight: 40,
                marginBottom: 10,
              }}
            >
              <Text style={styles.tagBoxtime}>10:30 am</Text>
              <Text style={styles.tagBoxact}>On Time</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tagBox}>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                marginBottom: 10,
                marginRight: 20,
              }}
            >
              <View
                style={{
                  backgroundColor: "#00A9FF10",
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Image
                  source={require("../../assets/icons8-logout-rounded-100.png")}
                  style={styles.icon}
                />
              </View>

              <Text style={styles.tagBoxtext}>Check Out</Text>
            </View>

            <View
              style={{
                alignItems: "flex-start",
                marginRight: 30,
                marginBottom: 10,
              }}
            >
              <Text style={styles.tagBoxtime}>07:00 pm</Text>
              <Text style={styles.tagBoxact}>Go Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tagBox}>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                marginBottom: 10,
                marginRight: 20,
              }}
            >
              <View
                style={{
                  backgroundColor: "#00A9FF10",
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Image
                  source={require("../../assets/icons8-tea-96.png")}
                  style={styles.icon}
                />
              </View>

              <Text style={styles.tagBoxtext}>Break Time</Text>
            </View>

            <View
              style={{
                alignItems: "flex-start",
                marginRight: 20,
                marginBottom: 10,
              }}
            >
              <Text style={styles.tagBoxtime}>00:30 min</Text>
              <Text style={styles.tagBoxact}>Avg Time 30 min</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tagBox}>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                marginBottom: 10,
                marginRight: 20,
              }}
            >
              <View
                style={{
                  backgroundColor: "#00A9FF10",
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Image
                  source={require("../../assets/icons8-calender-64.png")}
                  style={styles.icon}
                />
              </View>

              <Text style={styles.tagBoxtext}>Total Days</Text>
            </View>

            <View
              style={{
                alignItems: "flex-start",
                marginRight: 30,
                marginBottom: 10,
              }}
            >
              <Text style={styles.tagBoxtime}>28</Text>

              <Text style={styles.tagBoxact}>Working Days</Text>
            </View>
          </TouchableOpacity>
        </View>

          <View style={styles.swipecontainer}>
        <View style={styles.activityView}>
          <Text style={styles.activitytext}>Your Activity </Text>
          <TouchableOpacity>
            <Text style={styles.viewall}>View All</Text>
          </TouchableOpacity>
        </View>
                

        <View style={styles.swipe}>
        


          <SwipeButton
            thumbIconWidth={50}
            thumbIconComponent={CheckinButton}
            // disableRail={!onswipe} // Disable rail when onswipe is true

            title={onswipe? "Swipe To Check Out":"Swipe To Check In"}
            titleColor="white"
            titleStyles={{ fontSize: 18, fontFamily: "Syne-Regular" }}
            swipeSuccessThreshold={70}
            onSwipeSuccess={handleSwipeSuccess}
            // onSwipeFail={handleSwipeFail}
            // disableResetOnTap={true}

            shouldResetAfterSuccess={true}
            enableReverseSwipe={onswipe}
            // enableRightToLeftSwipe={!onswipe}
            resetAfterSuccessAnimDelay={10}
            resetAfterSuccessAnimDuration={10}

            
            
            

        
            railBorderColor="transparent"
            railBackgroundColor={onswipe?"tomato":"#00A9FF"}
            railFillBackgroundColor="transparent"
            railFillBorderColor='transparent'
            

            containerStyles={{
              width:'90%',
              // pointerEvents: 'box-only',
              // pointerEvents: onswipe ? 'none' : 'auto', // Disable touch events on rail when onSwipe is true

              



              
              // borderWidth: 1,
              // borderRadius: 10,
              // height: 60,
              // padding: 4,
              // disabledThumbIconBorderColor: "transparent",
            }}
            thumbIconBackgroundColor="white"
            thumbIconStyles={{
              borderRadius: 25,
              // Set your desired height
              width: 20,
              height: 20,

              borderColor: "transparent", 
              // Set the border color to transparent
            }}

          />
          
          
        </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "#fff",
    // padding: 20,
    // margin: 10,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 10,
  },

  headercon: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginRight: 60,
  },

  headertext: {
    // justifyContent:'flex-start',
  },
  empname: {
    color: "black",
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    marginLeft: 5,
  },
  bell: {},
  position: {
    color: "black",
    fontSize: 15,
    marginLeft: 5,

    fontFamily: "Poppins-Regular",
  },
  calendar: {
    marginTop: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  month: {
    // fontWeight: "700",
    color:'black',
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    top: "1%",
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 2,
  },
  scrollViewContent: {
    flexDirection: "row",
    padding: 16,
  },
  item: {
    height: 80,
    width: 70,
    marginRight: 16,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  date: {
    fontSize: 20,
    color:'black',

    // fontWeight: "bold",
    fontFamily: "Poppins-Bold",
  },
  days: {
    fontSize: 15,
    
    // color: "black",
    fontFamily: "Syne-Bold",
  },
  todayatt: {
    fontSize: 16,
    flexDirection: "row",
    marginLeft: 20,
    fontFamily: "Poppins-Bold",
    // fontWeight: "700",
    color:'black'
  },
  checkintime: {
    justifyContent: "center",
    marginTop: 5,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 15,
  },
  tagBox: {
    height: 110,
    width: "48%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tagBoxtext: {
    fontSize: 14,
    // flexDirection:'row',
    // alignItems:'center',
    color:'black',
    marginTop: 8,
    marginLeft: 5,
    fontFamily: "Poppins-Regular",
  },

  tagBoxact:{
    color:'black',
    fontFamily:'Poppins-Regular',
  
    

  },
  tagBoxtime: {
    fontSize: 20,
    // fontWeight: "700",
    fontFamily:'Poppins-Bold',
    color:'black',
    alignItems: "center",
  },
 
  activityView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  activitytext: {
    fontSize: 16,
    color:'black',
    // fontWeight:'700',
    marginLeft: "6%",
    fontFamily: "Poppins-Bold",
  },
  viewall: {
    fontSize: 16,
    color: "#00A9FF",
    // right: "50%",
    marginRight: 20,
    fontFamily: "Poppins-Regular",
  },
  swipe: {
    // padding: 10,
    // width: "100%",
    marginTop:10,
    alignItems:'center'
    
  },
  // swipebutton: {
  //   // Your styles for the SwipeButton
  //   backgroundColor: "#fff"
  // },

  swipecontainer:{
    marginTop:10,
    // pointerEvents: 'none',

    
    
  },
  shadowContainer: {
    shadowColor: "#FFFFFF", // Set your desired shadow color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  icon: {
    width: 25,

    height: 25,
  },
});

export default Profile;
