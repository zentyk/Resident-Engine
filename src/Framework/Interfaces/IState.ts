export enum IState {
    None,
    Idle,
    IdleBored,
    Walk,
    WalkBack,
    WalkSomeDamage,
    WalkFullDamage,
    Run,
    RunSomeDamage,
    Climb,
    Pull,
    Push,
    StandingDamage,
    ShortyDamage,
    PulledDamage,
    ShortyCollecting,
    StoringWeapon, //only triggered when player is holding a weapon
}