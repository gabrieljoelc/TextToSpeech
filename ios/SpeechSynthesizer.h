// From https://github.com/expo/expo/blob/main/packages/expo-speech/ios/EXSpeech/EXSpeech.m#L61-L68
// Copyright 2015-present 650 Industries. All rights reserved.

#import <ExpoModulesCore/EXExportedModule.h>
#import <ExpoModulesCore/EXModuleRegistryConsumer.h>
#import <ExpoModulesCore/EXEventEmitter.h>

@interface SpeechSynthesizer : EXExportedModule <EXEventEmitter, EXModuleRegistryConsumer>

@end
