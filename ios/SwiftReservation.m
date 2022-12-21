//
//  SwiftReservation.m
//  TextToSpeech
//  From https://medium.com/ssense-tech/how-to-cook-a-react-native-bridge-with-swift-part-1-16f28ab902f7
//  Created by Gabriel Chaney on 12/21/22.
//
#import "React/RCTBridgeModule.h"

@interface
RCT_EXTERN_MODULE(SwiftReservation, NSObject)

RCT_EXTERN_METHOD(makeReservation: (double)numberOfPeople date:(NSString *)date)

@end
