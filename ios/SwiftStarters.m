//
//  SwiftStarters.m
//  TextToSpeech
//  From https://medium.com/ssense-tech/how-to-cook-a-react-native-bridge-with-swift-part-1-16f28ab902f7
//  Created by Gabriel Chaney on 12/21/22.
//

#import "React/RCTBridgeModule.h"

@interface
RCT_EXTERN_MODULE(SwiftStarters, NSObject)

RCT_EXTERN_METHOD(sendAppetizersOrder: (NSDictionary *)dictionary)

RCT_EXTERN_METHOD(getFirstAppetizer: (RCTResponseSenderBlock *)callback)

RCT_EXTERN_METHOD(getSecondAppetizer: (RCTResponseErrorBlock *)callback)

RCT_EXTERN_METHOD(getLastAppetizer: (BOOL *)waitressWantToOfferItForFree ok:(RCTResponseSenderBlock *)accepted no:(RCTResponseErrorBlock *)declined)

@end
