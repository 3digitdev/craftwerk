type Project = {
    type: ProjectType;
    title: string;
    creator: string;
    startDate: Date;
    endDate: Date;
    dedication: string | null;
    dedicationDate: Date | null;
    createdFor: string | null;
    occasion: string | null;
    dimensions: { length: number, width: number, units: DimensionUnits } | null,
    fabricInfo: FabricInfo | null;
    quiltInfo: QuiltInfo | null;
    binding: Binding | null;
}

enum ProjectType {
    Quilting = "Quilting",
    Knitting = "Knitting",
}

enum DimensionUnits {
    Millimeters = 'mm',
    Centimeters = 'cm',
    Meters = 'm',
    Inches = 'in',
    Feet = 'ft',
}

type FabricInfo = {
    fabricType: Scrappy | Yardage | Precut;
    machine: string;
    threadInfo: ThreadInfo;
    needleInfo: NeedleInfo;
}

type Scrappy = {
    primaryFabric: string | null;
    notes: string | null;
}

type Yardage = {
    notes: string | null;
    fabrics: FabricMetadata[];
}

type Precut = {
    type: PrecutType;
    otherDesc: string | null;  // null unless type = PrecutType.Other
    primaryFabric: FabricMetadata;
    backgroundFabric: FabricMetadata;
    notes: string | null;
}

enum PrecutType {
    FatQuarter = "Fat-quarter",
    FatEighth = "Fat-eighth",
    JellyRoll = "Jelly Roll",
    Charm = "Charm",
    MiniCharm = "Mini-charm",
    LayerCake = "Layer Cake",
    JellyBar = "Jelly Bar",
    Kit = "Kit",
    Other = "Other",
}

type FabricMetadata = {
    id: string;
    line: string | null;
    designer: string | null;
    description: string | null;
    totalYardage: number | null;
    purchaseStore: string | null;
    purchasePrice: number | null;
    purchaseDate: Date | null;
}

type ThreadInfo = {
    color: string | null;
    brand: string | null;
    weight: string | null;
    composition: string | null;
    store: string | null;
    price: number | null;
    purchaseDate: Date | null;
    amountUsed: string | null;
}

type NeedleInfo = {
    type: string | null;
    brand: string | null;
    store: string | null;
    price: string | null;
    purchaseDate: Date | null;
}

type QuiltInfo = {
    quiltedBy: string;
    shop: string | null;
    cost: string | null;
    quiltDate: Date | null;
    battings: Batting[];
    quiltType: QuiltType;
    otherQuiltType: string | null;  // null unless quiltType = QuiltType.Other
    quiltTypeData: Partial<QuiltTypeData>;
}

type Batting = {
    composition: string;
    weight: string | null;
    color: string;
    size: string | null;
    brand: string | null;
    store: string | null;
    price: number | null;
}

enum QuiltType {
    Hand = "Hand-quilting",
    AsYouGo = "Quilt-as-you-go",
    Machine = "Machine-quilting",
    LongArm = "Long-arm quilting",
    Automated = "Automated quilting",
    Other = "Other"
}

type QuiltTypeData = {
    threadInfo: ThreadInfo;
    needleInfo: NeedleInfo;
    markingMethod: string;
    machine: string;
    design: string;
    designer: string;
    designPrice: string;
    designStore: string;
}

type Binding = {
    width: string | null;
    date: Date | null;
    style: string | null;
    fabrics: FabricMetadata[];
}

export { ProjectType, PrecutType, QuiltType, DimensionUnits }

export type {
    Project,
    FabricInfo,
    Scrappy,
    Yardage,
    Precut,
    FabricMetadata,
    ThreadInfo,
    NeedleInfo,
    QuiltInfo,
    Batting,
    QuiltTypeData,
    Binding,
}
