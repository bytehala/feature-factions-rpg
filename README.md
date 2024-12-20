# Feature Factions RPG 🎲

![Feature Factions RPG](assets/feature_factions.png)

Welcome to Feature Factions, where the fate of three ancient races rests in your hands! Will you join the precise and mechanical Aetheron, the resilient and cunning Bessari, or the mystical and graceful Calenwyn? Mine resources to fuel your faction’s treasury—the Central Node 🤖, Guild Vault 🧑‍🏭, or Sylvan Reliquary 🧝‍♀️. Work with your allies to unlock powerful upgrades and strategize for the ultimate showdown. The war is coming—#StopPretending 🧙and  #StartShipping 🚀

## How to Play

1. Install and Choose Your Race

- Aetheron: Logical and mechanical innovators. 🤖
- Bessari: Tenacious and resourceful humanoids. 🧑‍🏭
- Calenwyn: Mystical and nature-bound elves. 🧝‍♀️

2. Mine Resources

Keep the app running to mine resources automatically. These resources are essential for upgrades and advancing your faction.

3. Contribute to Your Faction’s Treasury
 
- Central Node for Aetheron 🤖
- Guild Vault for Bessari 🧑‍🏭
- Sylvan Reliquary for Calenwyn 🧝‍♀️

These contributions power faction upgrades and unlock key advantages.

4. Collaborate and Strategize

Team up with your faction to decide how to spend resources. Strategically unlock upgrades to outpace rival factions in the race to victory.

5. Recruit Your Friends

Invite friends to join your faction! Every new player boosts your resource mining rate, giving your faction a strategic edge.

6. Prepare for the Final Battle

The war is inevitable. Outsmart and outmaneuver rival factions by collaborating effectively and staying active. The future of your race depends on your actions!

Are you ready to shape your destiny? Join Feature Factions RPG today and claim your place in this epic saga! #FeatureFactions #EpicRPG #FeatureFlags 🎮

----

## Local Development Setup

*This is a submission for the [DevCycle Feature Flag Challenge](https://dev.to/challenges/devcycle): Feature Flag Funhouse*

https://dev.to/bytehala/feature-factions-mobile-cooperate-and-battle-with-devcycle-feature-flags-4mnk

1. Create a DevCycle account, if you don't have one already
2. Locally create a secrets.json, and add the `sdkKey` property. The value will come from your DevCycle dashboard. I used the `client` sdkKey. [React Native documentation](https://docs.devcycle.com/sdk/client-side-sdks/react-native/react-native-gettingstarted#non-blocking)
3. Run the app (pre-requisites: React Native setup, Android Studio or XCode)
    a. iOS: yarn install, npx pod-install, yarn start, `i` runs the app on iOS
    b. Android: yarn install, `a`

### Changing Your Faction

Currently, this is hardcoded via `FACTION_ACCESSOR` in `App.tsx`.
Valid values are A, B, and C.

### DevCycle Dashboard "level up" options setup

1. create a feature
2. create variations
3. set up targetting

![variations](https://github.com/user-attachments/assets/8136b818-01f4-4f06-a0e1-8e7a6624c9f9)

## Roadmap

- sqlite or local db to store values such as faction's total gold in memory, so it doesn't reset to 0 each restart
- race selection screen, so we don't hardcode
- animations to delight the user, e.g. when donating mined gold, staff particles, etc
- sound effects
- screen showing previous faction upgrades
- shell script to simulate new level up options from the backend
