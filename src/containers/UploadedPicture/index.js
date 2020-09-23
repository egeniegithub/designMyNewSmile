import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import styles from './style';
import CustomHeader from "../../components/CustomHeader";
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/UserAction';
import BottomBar from '../../components/BottomBar';


function UploadedPictures(props) {
    const { u_pic1, u_pic2, u_pic3, u_pic4, u_pic5, u_pic6 } = props.userObject;
    function onPressMenuIcon() {
        props.navigation.toggleDrawer();
    }

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                title="Home"
                leftIcon="menu"
                onPress={onPressMenuIcon}
            />

            {
                !u_pic1 && !u_pic2 && !u_pic3 && !u_pic4 && !u_pic5 && !u_pic6 ?
                    <Text style={styles.textStyle}>Nothing to display</Text>
                    :
                    <ScrollView>
                        {u_pic1 &&
                            <Image
                                source={{ uri: u_pic1 }}
                                style={styles.image}
                            />
                        }

                        {u_pic2 &&
                            <Image
                                source={{ uri: u_pic2 }}
                                style={styles.image}
                            />
                        }

                        {u_pic3 &&
                            <Image
                                source={{ uri: u_pic3 }}
                                style={styles.image}
                            />
                        }

                        {u_pic4 &&
                            <Image
                                source={{ uri: u_pic4 }}
                                style={styles.image}
                            />
                        }

                        {u_pic5 &&
                            <Image
                                source={{ uri: u_pic5 }}
                                style={styles.image}
                            />
                        }

                        {u_pic6 &&
                            <Image
                                source={{ uri: u_pic6 }}
                                style={styles.image}
                            />
                        }

                    </ScrollView>
            }
            <BottomBar currentTab={1} token={props.token} navigation={props.navigation} currentScreen={'UploadedPictures'}/>

        </View >
    )
}


const mapStateToProps = state => {
    return {
        userObject: state.user.userObject,
        token: state.user.token,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProfile: () => dispatch(actions.getProfile()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadedPictures);