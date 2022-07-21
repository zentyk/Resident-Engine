import LogUtils from "./Utils/LogUtils";
import SentryUtils from "./Utils/SentryUtils";

export default class ProjectConfig{
    //this value should be encrypted
    private readonly engineMode : String = 'Framework96';
    public static readonly SentryDsn = "https://fuckyou.hacker";
    public static readonly Environment = "dev";
    public LogUtils : LogUtils;
    public SentryUtils : SentryUtils;

    constructor() {
        this.LogUtils = new LogUtils();
        this.SentryUtils = new SentryUtils();
        this.SentryUtils.Init(ProjectConfig.SentryDsn);
    }
}