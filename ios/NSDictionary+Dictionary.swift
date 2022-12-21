//
//  NSDictionary+Dictionary.swift
//  TextToSpeech
//  From https://medium.com/ssense-tech/how-to-cook-a-react-native-bridge-with-swift-part-1-16f28ab902f7
//  Created by Gabriel Chaney on 12/21/22.
//


import Foundation

extension NSDictionary {
  var stringDictionary: [String : String] {
    var dictionary: [String : String] = [:]
    let keys = self.allKeys.compactMap { $0 as? String }
    for key in keys {
      let keyValue = self.value(forKey: key)
      dictionary[key] = keyValue as? String
    }
    return dictionary
  }
  var anyDictionary: [String : AnyObject] {
    var dictionary: [String : AnyObject] = [:]
    let keys = self.allKeys.compactMap { $0 as? String }
    for key in keys {
      let keyValue = self.value(forKey: key) as AnyObject
      dictionary[key] = keyValue
    }
    return dictionary
  }
}
