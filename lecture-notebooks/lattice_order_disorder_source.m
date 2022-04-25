(* ::Package:: *)

north$ = {0, 1}; south$ = {0, -1}; east$ = {1, 0}; west$ = {-1, 0};
northwest$ = north$ + west$;
southwest$ = south$ + west$;
southeast$ = south$ + east$;
northeast$ = north$ + east$;
directions = {north$, south$, east$, west$, northeast$, northwest$, southeast$, southwest$};
blueAtom = -1; redAtom = 1; vacancy = 0;

switchEnergyVacancyCenter[north$] = 
Compile[{{neighborhood5by5, _Real, 2},  {$nearestEVals, _Real}, {$nextNearestEVals, _Real}},
neighborhood5by5[[3,4]] ($nearestEVals (neighborhood5by5[[2,3]]-neighborhood5by5[[2,4]]+neighborhood5by5[[3,2]]-neighborhood5by5[[3,5]]+neighborhood5by5[[4,3]]-neighborhood5by5[[4,4]])+$nextNearestEVals (neighborhood5by5[[2,2]]-neighborhood5by5[[2,3]]+neighborhood5by5[[2,4]]-neighborhood5by5[[2,5]]+neighborhood5by5[[4,2]]-neighborhood5by5[[4,3]]+neighborhood5by5[[4,4]]-neighborhood5by5[[4,5]]))
,CompilationTarget -> "C", RuntimeOptions -> "Speed"]




switchEnergyVacancyCenter[south$] = 
Compile[{{neighborhood5by5, _Real, 2},  {$nearestEVals, _Real}, {$nextNearestEVals, _Real}},
-neighborhood5by5[[3,2]] ($nearestEVals (neighborhood5by5[[2,2]]-neighborhood5by5[[2,3]]+neighborhood5by5[[3,1]]-neighborhood5by5[[3,4]]+neighborhood5by5[[4,2]]-neighborhood5by5[[4,3]])+$nextNearestEVals (neighborhood5by5[[2,1]]-neighborhood5by5[[2,2]]+neighborhood5by5[[2,3]]-neighborhood5by5[[2,4]]+neighborhood5by5[[4,1]]-neighborhood5by5[[4,2]]+neighborhood5by5[[4,3]]-neighborhood5by5[[4,4]]))
,CompilationTarget -> "C", RuntimeOptions -> "Speed"]




switchEnergyVacancyCenter[east$] = 
Compile[{{neighborhood5by5, _Real, 2},  {$nearestEVals, _Real}, {$nextNearestEVals, _Real}},
neighborhood5by5[[4,3]] ($nearestEVals (neighborhood5by5[[2,3]]+neighborhood5by5[[3,2]]+neighborhood5by5[[3,4]]-neighborhood5by5[[4,2]]-neighborhood5by5[[4,4]]-neighborhood5by5[[5,3]])+$nextNearestEVals (neighborhood5by5[[2,2]]+neighborhood5by5[[2,4]]-neighborhood5by5[[3,2]]-neighborhood5by5[[3,4]]+neighborhood5by5[[4,2]]+neighborhood5by5[[4,4]]-neighborhood5by5[[5,2]]-neighborhood5by5[[5,4]]))
,CompilationTarget -> "C", RuntimeOptions -> "Speed"]



switchEnergyVacancyCenter[west$] = 
Compile[{{neighborhood5by5, _Real, 2},  {$nearestEVals, _Real}, {$nextNearestEVals, _Real}},
-neighborhood5by5[[2,3]] ($nearestEVals (neighborhood5by5[[1,3]]+neighborhood5by5[[2,2]]+neighborhood5by5[[2,4]]-neighborhood5by5[[3,2]]-neighborhood5by5[[3,4]]-neighborhood5by5[[4,3]])+$nextNearestEVals (neighborhood5by5[[1,2]]+neighborhood5by5[[1,4]]-neighborhood5by5[[2,2]]-neighborhood5by5[[2,4]]+neighborhood5by5[[3,2]]+neighborhood5by5[[3,4]]-neighborhood5by5[[4,2]]-neighborhood5by5[[4,4]]))
,CompilationTarget -> "C", RuntimeOptions -> "Speed"]



switchEnergyVacancyCenter[northwest$] = 
Compile[{{neighborhood5by5, _Real, 2},  {$nearestEVals, _Real}, {$nextNearestEVals, _Real}},
-neighborhood5by5[[2,4]] ($nearestEVals (neighborhood5by5[[1,4]]+neighborhood5by5[[2,5]]-neighborhood5by5[[3,2]]-neighborhood5by5[[4,3]])+$nextNearestEVals (neighborhood5by5[[1,3]]+neighborhood5by5[[1,5]]-neighborhood5by5[[2,2]]+neighborhood5by5[[3,5]]-neighborhood5by5[[4,2]]-neighborhood5by5[[4,4]]))
,CompilationTarget -> "C", RuntimeOptions -> "Speed"]




switchEnergyVacancyCenter[northeast$] = 
Compile[{{neighborhood5by5, _Real, 2},  {$nearestEVals, _Real}, {$nextNearestEVals, _Real}},
neighborhood5by5[[4,4]] ($nearestEVals (neighborhood5by5[[2,3]]+neighborhood5by5[[3,2]]-neighborhood5by5[[4,5]]-neighborhood5by5[[5,4]])+$nextNearestEVals (neighborhood5by5[[2,2]]+neighborhood5by5[[2,4]]-neighborhood5by5[[3,5]]+neighborhood5by5[[4,2]]-neighborhood5by5[[5,3]]-neighborhood5by5[[5,5]]))
,CompilationTarget -> "C", RuntimeOptions -> "Speed"]




switchEnergyVacancyCenter[southeast$] = 
Compile[{{neighborhood5by5, _Real, 2},  {$nearestEVals, _Real}, {$nextNearestEVals, _Real}},
neighborhood5by5[[4,2]] ($nearestEVals (neighborhood5by5[[2,3]]+neighborhood5by5[[3,4]]-neighborhood5by5[[4,1]]-neighborhood5by5[[5,2]])+$nextNearestEVals (neighborhood5by5[[2,2]]+neighborhood5by5[[2,4]]-neighborhood5by5[[3,1]]+neighborhood5by5[[4,4]]-neighborhood5by5[[5,1]]-neighborhood5by5[[5,3]]))
,CompilationTarget -> "C", RuntimeOptions -> "Speed"]



switchEnergyVacancyCenter[southwest$] = 
Compile[{{neighborhood5by5, _Real, 2},  {$nearestEVals, _Real}, {$nextNearestEVals, _Real}},
-neighborhood5by5[[2,2]] ($nearestEVals (neighborhood5by5[[1,2]]+neighborhood5by5[[2,1]]-neighborhood5by5[[3,4]]-neighborhood5by5[[4,3]])+$nextNearestEVals (neighborhood5by5[[1,1]]+neighborhood5by5[[1,3]]-neighborhood5by5[[2,4]]+neighborhood5by5[[3,1]]-neighborhood5by5[[4,2]]-neighborhood5by5[[4,4]]))
,CompilationTarget -> "C", RuntimeOptions -> "Speed"]


insertEnergyFirstInsertedAtSecond[{redAtom,blueAtom}]=
Compile[{{neighborhood3by3,_Real,2}, 
{$muBlue, _Real}, {$muRed, _Real} , {$nearestEValsInsert, _Real}, {$nextNearestEValsInsert, _Real}},  $muBlue-$muRed+2 $nearestEValsInsert (neighborhood3by3[[1,2]]+neighborhood3by3[[2,1]]+neighborhood3by3[[2,3]]+neighborhood3by3[[3,2]])+2 $nextNearestEValsInsert (neighborhood3by3[[1,1]]+neighborhood3by3[[1,3]]+neighborhood3by3[[3,1]]+neighborhood3by3[[3,3]])
]


insertEnergyFirstInsertedAtSecond[{blueAtom,redAtom}]=
Compile[{{neighborhood3by3,_Real,2}, 
{$muBlue, _Real}, {$muRed, _Real} , {$nearestEValsInsert, _Real}, {$nextNearestEValsInsert, _Real}},  -$muBlue+$muRed-2 $nearestEValsInsert (neighborhood3by3[[1,2]]+neighborhood3by3[[2,1]]+neighborhood3by3[[2,3]]+neighborhood3by3[[3,2]])-2 $nextNearestEValsInsert (neighborhood3by3[[1,1]]+neighborhood3by3[[1,3]]+neighborhood3by3[[3,1]]+neighborhood3by3[[3,3]])
]


insertEnergyFirstInsertedAtSecond[{redAtom,vacancy}]=
Compile[{{neighborhood3by3,_Real,2}, 
{$muBlue, _Real}, {$muRed, _Real} , {$nearestEValsInsert, _Real}, {$nextNearestEValsInsert, _Real}},  -$muRed+$nearestEValsInsert (neighborhood3by3[[1,2]]+neighborhood3by3[[2,1]]+neighborhood3by3[[2,3]]+neighborhood3by3[[3,2]])+$nextNearestEValsInsert (neighborhood3by3[[1,1]]+neighborhood3by3[[1,3]]+neighborhood3by3[[3,1]]+neighborhood3by3[[3,3]])
]

insertEnergyFirstInsertedAtSecond[{vacancy,redAtom}]=
Compile[{{neighborhood3by3,_Real,2}, 
{$muBlue, _Real}, {$muRed, _Real} , {$nearestEValsInsert, _Real}, {$nextNearestEValsInsert, _Real}},  $muRed-$nearestEValsInsert (neighborhood3by3[[1,2]]+neighborhood3by3[[2,1]]+neighborhood3by3[[2,3]]+neighborhood3by3[[3,2]])-$nextNearestEValsInsert (neighborhood3by3[[1,1]]+neighborhood3by3[[1,3]]+neighborhood3by3[[3,1]]+neighborhood3by3[[3,3]])
]

insertEnergyFirstInsertedAtSecond[{blueAtom,vacancy}]=
Compile[{{neighborhood3by3,_Real,2}, 
{$muBlue, _Real}, {$muRed, _Real} , {$nearestEValsInsert, _Real}, {$nextNearestEValsInsert, _Real}},  -$muBlue-$nearestEValsInsert (neighborhood3by3[[1,2]]+neighborhood3by3[[2,1]]+neighborhood3by3[[2,3]]+neighborhood3by3[[3,2]])-$nextNearestEValsInsert (neighborhood3by3[[1,1]]+neighborhood3by3[[1,3]]+neighborhood3by3[[3,1]]+neighborhood3by3[[3,3]])
]

insertEnergyFirstInsertedAtSecond[{vacancy,blueAtom}]=
Compile[{{neighborhood3by3,_Real,2}, 
{$muBlue, _Real}, {$muRed, _Real} , {$nearestEValsInsert, _Real}, {$nextNearestEValsInsert, _Real}},  $muBlue+$nearestEValsInsert (neighborhood3by3[[1,2]]+neighborhood3by3[[2,1]]+neighborhood3by3[[2,3]]+neighborhood3by3[[3,2]])+$nextNearestEValsInsert (neighborhood3by3[[1,1]]+neighborhood3by3[[1,3]]+neighborhood3by3[[3,1]]+neighborhood3by3[[3,3]])
]



reset[weights : {vFrac_, bFrac_, rFrac_}, {rows_, columns_}] :=  
 Module[{vacancyList, blueAtomList, redAtomList, lattice, atomType},
  vacancyList = {};
  blueAtomList = {};
  redAtomList = {};
  lattice =
   Table[
    If[ 3 < i < rows - 2 && 3 < j < columns - 2,
     atomType = RandomChoice[weights -> {0, 1, -1}];
     Switch[atomType, 0, AppendTo[vacancyList, {i, j}]; , -1, 
      AppendTo[blueAtomList, {i, j}];, 1, 
      AppendTo[redAtomList, {i, j}];]; 
     atomType,
     0
     ]
    , {i, 1, rows}, {j, 1, columns}
    ];
  {
   lattice, {vacancyList, blueAtomList, redAtomList}
   }
  ]




  updateListsSwitch[{from : {fi_, fj_}, 
   to : {ti_, tj_}}, {lattice_, {vacancyList_, blueAtomList_, 
    redAtomList_}}] := (*for switches: returns {vacancyList, \
blueAtomList, redAtomList}*)
  Module[
  {fromType = lattice[[fi, fj]], toType = lattice[[ti, tj]]},
  If[fromType === toType, 
   Return[{vacancyList, blueAtomList, redAtomList}]];
  
  If[ fromType === 0 && toType === -1, 
   Return[{Join[DeleteCases[vacancyList, from], {to}], 
     Join[DeleteCases[blueAtomList, to], {from}], redAtomList}]];
  If[ fromType === 0 && toType === 1, 
   Return[{Join[DeleteCases[vacancyList, from], {to}], blueAtomList, 
     Join[DeleteCases[redAtomList, to], {from}]}]];
  
  If[ fromType === -1 && toType === 0, 
   Return[{Join[DeleteCases[vacancyList, to], {from}], 
     Join[DeleteCases[blueAtomList, from], {to}], redAtomList}]];
  If[ fromType === 1 && toType === 0, 
   Return[{Join[DeleteCases[vacancyList, to], {from}], blueAtomList, 
     Join[DeleteCases[redAtomList, from], {to}]}]];
  
  If[ fromType === -1 && toType === 1, 
   Return[{vacancyList, Join[DeleteCases[blueAtomList, from], {to}], 
     Join[DeleteCases[redAtomList, to], {from}]}]];
  If[ fromType === 1 && toType === -1, 
   Return[{vacancyList, Join[DeleteCases[blueAtomList, to], {from}], 
     Join[DeleteCases[redAtomList, from], {to}]}]];
  ]



  updateListsInsert[atomType_Integer, 
  to : {ti_, tj_}, {lattice_, {vacancyList_, blueAtomList_, 
    redAtomList_}}] := (*for insertions: returns {vacancyList, \
blueAtomList, redAtomList}*)
  Module[
  { toType = lattice[[ti, tj]]},
  If[atomType === toType, 
   Return[{vacancyList, blueAtomList, redAtomList}]];
  
  If[ atomType === 0 && toType === -1, 
   Return[{Join[vacancyList, {to}], DeleteCases[blueAtomList, to], 
     redAtomList}]];
  If[ atomType === 0 && toType === 1, 
   Return[{Join[vacancyList, {to}], blueAtomList, 
     DeleteCases[redAtomList, to]}]];
  
  If[ atomType === -1 && toType === 0, 
   Return[{DeleteCases[vacancyList, to], Join[blueAtomList, {to}], 
     redAtomList}]];
  If[ atomType === 1 && toType === 0, 
   Return[{DeleteCases[vacancyList, to], blueAtomList, 
     Join[redAtomList, {to}]}]];
  
  If[ atomType === -1 && toType === 1, 
   Return[{vacancyList, Join[blueAtomList, {to}], 
     DeleteCases[redAtomList, to]}]];
  If[ atomType === 1 && toType === -1, 
   Return[{vacancyList, DeleteCases[blueAtomList, to], 
     Join[redAtomList, {to}]}]];
  ]



  makeSwitch[{from : {fi_, fj_}, 
    to : {ti_, tj_}}, {lattice_, {vacancyList_, blueAtomList_, 
     redAtomList_}}] :=
   
  Module[{fromType = lattice[[fi, fj]], toType = lattice[[ti, tj]], 
    newlattice = lattice, newvacancylist, newbluelist, newredlist},
   If[fromType ==  toType, 
    Return[{lattice, {vacancyList, blueAtomList, redAtomList}}]];
   
   {newvacancylist, newbluelist, newredlist} = 
    updateListsSwitch[{from, 
      to}, {lattice, {vacancyList, blueAtomList, redAtomList}}];
   {newlattice[[fi, fj]], 
     newlattice[[ti, tj]]} = {newlattice[[ti, tj]], 
     newlattice[[fi, fj]]};
   {newlattice, {newvacancylist, newbluelist, newredlist}}
   ];



   makeInsertion[newAtomType_, 
   to : {ti_, tj_}, {lattice_, {vacancyList_, blueAtomList_, 
     redAtomList_}}] :=
   
  Module[{toType = lattice[[ti, tj]], newlattice = lattice, 
    newvacancylist, newbluelist, newredlist},
   If[newAtomType ==  toType, 
    Return[{lattice, {vacancyList, blueAtomList, redAtomList}}]];
   
   {newvacancylist, newbluelist, newredlist} = 
    updateListsInsert[newAtomType, 
     to, {lattice, {vacancyList, blueAtomList, redAtomList}}];
   newlattice[[ti, tj]] = newAtomType;
   {newlattice, {newvacancylist, newbluelist, newredlist}}
   ];



   showGraphics[blueAtomList_, redAtomList_] := Graphics[
  { Blue, Disk[#, .4] & /@ Reverse /@ blueAtomList, Red, 
   Disk[#, .4] & /@ Reverse /@ redAtomList},
  ImageSize -> Full, Axes -> True]




  showGraphics[blueAtomList_, redAtomList_, vacancyList_] := Row[
  {Graphics[
    { Blue, Disk[#, .4] & /@ Reverse /@ blueAtomList, Red, 
     Disk[#, .4] & /@ Reverse /@ redAtomList},
    ImageSize -> Large],
   PieChart[Length /@ {blueAtomList, redAtomList, vacancyList}, 
    ChartStyle -> {Blue, Red, GrayLevel[0.9]}, 
    PerformanceGoal -> "Speed"]
   }
  ]


  neighborhoodGraphic[nbrhood5x5_] := Graphics[
  Flatten[
   Table[Switch[nbrhood5x5[[i, j]], 0, 
     Circle[2 {i, j}], -1, {Blue, Disk[2 {i, j}]}, 
     1, {Red, Disk[2 {i, j}]}], {i, 1, 5}, {j, 1, 5}], 1]
  ]



  neighborhoodGraphic[nbrhood5x5_] := Graphics[
  Flatten[
   Table[Switch[nbrhood5x5[[i, j]], 0, 
     Circle[2 {i, j}], -1, {Blue, Disk[2 {i, j}]}, 
     1, {Red, Disk[2 {i, j}]}], {i, 1, 5}, {j, 1, 5}], 1]
  ]



findEdgePosition[rows_, columns_] := 
 Module[{rowChoice = RandomInteger[{4, rows - 3}], 
   columnChoice = RandomInteger[{4, columns - 3}]},
  RandomChoice[
   {
    {4, columnChoice},
    {rows - 3, columnChoice},
    {rowChoice, 4},
    {rowChoice, columns - 3}
    }
   ]
  ]




Clear[updateMCStep];
Options[updateMCStep] = {"ConstantComposition" -> True};



updateMCStep[{lattice_, {vacancyList_, blueAtomList_, redAtomList_}}, 
  temperature_, {muB_, muR_, nearestEnergyValue_, 
   nextNearestEnergyValue_}, OptionsPattern[]] := 
 Block[{
   newLattice = lattice, newVacancyList = vacancyList, 
   newblueAtomList = blueAtomList, newredAtomList = redAtomList,
   switchDirection = 
    RandomChoice[{{0, 1}, {0, -1}, {1, 0}, {-1, 0}, {1, 1}, {-1, 
       1}, {1, -1}, {-1, -1}}],
   insertAtom, interiorSite, r, c, surfaceSite, switchEnergy, 
   insertionEnergy, targetAtom, targetPosition, 
   neighborhoodMatrix3x3, neighborhoodMatrix5x5,
   rows, columns,
   performSwitch},
  {rows, columns} = Dimensions[lattice];
  If[Length[vacancyList] > 0,
   interiorSite = {r, c} = RandomChoice[vacancyList];
   targetPosition = {r, c} + switchDirection;
   While[! (3 < targetPosition[[1]] < rows - 2 && 
       3 < targetPosition[[2]] < columns - 2),
    switchDirection = 
     RandomChoice[{{0, 1}, {0, -1}, {1, 0}, {-1, 0}, {1, 1}, {-1, 
        1}, {1, -1}, {-1, -1}}];
    targetPosition = {r, c} + switchDirection
    ];
   neighborhoodMatrix5x5 = lattice[[r - 2 ;; r + 2, c - 2 ;; c + 2]];
   switchEnergy = 
    switchEnergyVacancyCenter[switchDirection][
      neighborhoodMatrix5x5, nearestEnergyValue, 
      nextNearestEnergyValue];
   performSwitch = (switchEnergy <= 0 || 
      Exp[-switchEnergy/temperature] > RandomReal[]);
   (*Sow[{neighborhoodGraphic[neighborhoodMatrix5x5],switchDirection,
   switchEnergy,Exp[-switchEnergy/temperature], performSwitch}];*)
   
   If[performSwitch,
    {newLattice, {newVacancyList, newblueAtomList, newredAtomList}} = 
     makeSwitch[{{r, c}, 
       targetPosition}, {newLattice, {newVacancyList, 
        newblueAtomList, newredAtomList}}]
    ];
   ];
  
  If[! OptionValue["ConstantComposition"],
   {r, c} = findEdgePosition @@ Dimensions[lattice];
   targetAtom = newLattice[[r, c]];
   insertAtom = RandomChoice[DeleteCases[{-1, 0, 1}, targetAtom]];
   neighborhoodMatrix3x3 = 
    newLattice[[r - 1 ;; r + 1, c - 1 ;; c + 1]];
   insertionEnergy = 
    insertEnergyFirstInsertedAtSecond[{insertAtom, targetAtom}][
     neighborhoodMatrix3x3, muB, muR, nearestEnergyValue, 
     nextNearestEnergyValue];
   If[insertionEnergy <= 0 || 
     Exp[-insertionEnergy/temperature] > 
      RandomReal[], {newLattice, {newVacancyList, newblueAtomList, 
       newredAtomList}} = 
     makeInsertion[
      insertAtom, {r, 
       c}, {newLattice, {newVacancyList, newblueAtomList, 
        newredAtomList}}]
    ];
   ];
  
  {newLattice, {newVacancyList, newblueAtomList, newredAtomList}}
  ]




controlsSubRow[1, 1] := Row[
  {
   Column[{
     Row[{
       Text@
        Style["\!\(\*SubscriptBox[\(\[Mu]\), \(Red\)]\) = ", \
{FontFamily -> "Arial", FontSize -> 20}], 
       InputField[Dynamic[muRed], Number, ImageSize -> 100]}], 
     VerticalSlider[Dynamic[muRed], {-10, 10}]}],
   Dynamic[showGraphics[blueAtomList, redAtomList, vacancyList], 
    UpdateInterval -> 0],
   Column[{
     Row[{
       Text@
        Style["\!\(\*SubscriptBox[\(\[Mu]\), \(Blue\)]\) = ", \
{FontFamily -> "Arial", FontSize -> 20}], 
       InputField[Dynamic[muBlue], Number, ImageSize -> 100]}], 
     VerticalSlider[Dynamic[muBlue], {-10, 10}]}]
   },
  Spacer[24]
  ]

controlsSubRow[1, 1, "alt"] := Row[
  {
   Column[{
     Row[{
       Text@
        Style["\!\(\*SubscriptBox[\(\[Mu]\), \(Red\)]\) = ", \
{FontFamily -> "Arial", FontSize -> 20}], 
       InputField[Dynamic[muRed], Number, ImageSize -> 100]}], 
     VerticalSlider[Dynamic[muRed], {-10, 10}]}],
   Dynamic[showGraphicsXRD[blueAtomList, redAtomList, vacancyList], 
    UpdateInterval -> 0],
   Column[{
     Row[{
       Text@
        Style["\!\(\*SubscriptBox[\(\[Mu]\), \(Blue\)]\) = ", \
{FontFamily -> "Arial", FontSize -> 20}], 
       InputField[Dynamic[muBlue], Number, ImageSize -> 100]}], 
     VerticalSlider[Dynamic[muBlue], {-10, 10}]}]
   },
  Spacer[24]
  ]


controlsSubRow[1, 2] := Row[{
   Button[
    Style["Go", {FontFamily -> "Arial", FontSize -> 16, 
      FontColor -> White}], animate = True;
    
    While[animate,
     {lattice, {vacancyList, blueAtomList, redAtomList}} = 
      updateMCStep[{lattice, {vacancyList, blueAtomList, 
         redAtomList}}, 
       temperature, {muBlue, muRed, nearestEnergyValue, 
        nextNearestEnergyValue}, 
       "ConstantComposition" -> constantComposition];Pause[Exp[-pause]]];
    ,
    Method -> "Queued", ImageSize -> 100, 
    Background -> RGBColor[0.1, 0.5, 0.1]]
   ,
   Button[
    Style["Stop", {FontFamily -> "Arial", FontSize -> 16, 
      FontColor -> White}], animate = False, Method -> "Preemptive", 
    ImageSize -> 100, Background -> RGBColor[0.75, 0.1, 0.1]]
   }
  ]

controlsSubRow[1, 3] := 
 Row[{Style["Temperature:", {FontFamily -> "Arial", FontSize -> 16}], 
   Manipulator[Dynamic[temperature], {.001, 20}, 
    Appearance -> {"Open", "Large"}, 
    AppearanceElements -> "InputField", ImageSize -> Large],
   Spacer[24], 
   Style["Constant Composition:", {FontFamily -> "Arial", 
     FontSize -> 16}],
   Checkbox[Dynamic[constantComposition], {False, True}]
   }
  ]

controlsSubRow[1, 4] := Row[
  {Column[{Style[
      "Like-Neighbor Interactions (\!\(\*SubscriptBox[\(E\), \(AA\)]\)/\!\(\*SubscriptBox[\(E\), \(BB\)]\))", {FontFamily -> "Arial", 
       FontSize -> 16}], 
     Manipulator[Dynamic[nearestEnergyValue], {-10, 10}, 
      Appearance -> {"Open", "Large"}, 
      AppearanceElements -> "InputField", ImageSize -> Large]}],
   Column[{Style[
      "Unlike-Neighbor Interactions (\!\(\*SubscriptBox[\(E\), \(AB\)]\))", {FontFamily -> "Arial", 
       FontSize -> 16}], 
     Manipulator[Dynamic[nextNearestEnergyValue], {-10, 10}, 
      Appearance -> {"Open", "Large"}, 
      AppearanceElements -> "InputField", ImageSize -> Large]}]
   }, Spacer[48]
  ]


controlsSubRow[1,4,1] := Row[{Style["Speed:", {FontFamily -> "Arial", FontSize -> 16}], 
   Manipulator[Dynamic[pause], {0, 100}, 
    Appearance -> { "Large"}, 
   ImageSize -> Large]
   }
  ]


controlsSubRow[1, 5] := Framed@Row[{
    Button[
     Style["Reset", {FontFamily -> "Arial", FontSize -> 16, 
       FontColor -> White}], {lattice, {vacancyList, blueAtomList, 
        redAtomList}} = reset[{0.1, .45, .45}, {rows, columns}]; 
     animate = False, Method -> "Preemptive", ImageSize -> 100, 
     Background -> Darker@Blue],
    Style["Rows", {FontFamily -> "Arial", FontSize -> 20}],
     InputField[Dynamic[rows], Number, ImageSize -> 30],
    Style["Columns", {FontFamily -> "Arial", FontSize -> 20}],
     InputField[Dynamic[columns], Number, ImageSize -> 30]}, 
   Spacer[20]]





 orderdisorderSimulation[muB0_,muR0_,nearestEnergy0_,nextNearestEnergy0_,T0_:2,rows_:30,columns_:40,constantC_:True][{vacancyFrac_,blueAtomLFrac_,redAtomFrac_}] := CreateDocument[ExpressionCell[
    
    Framed[DynamicModule[
      { lattice, vacancyList, blueAtomList, redAtomList, temperature, 
       muBlue, muRed, nearestEnergyValue, nextNearestEnergyValue, 
       animate, constantComposition=constantC, pause=0},
      {temperature, {muBlue, muRed, nearestEnergyValue, 
         nextNearestEnergyValue} } = 
       {T0, {muB0, muR0, nearestEnergy0, nextNearestEnergy0}};
      {lattice, {vacancyList, blueAtomList, redAtomList}} = 
       reset[{vacancyFrac, blueAtomLFrac, redAtomFrac}, {rows, columns}];
      Column[
       {
        controlsSubRow[1, 1]
        (*controlsSubRow[1,1,"alt"]*)
        ,
        controlsSubRow[1, 2],
        controlsSubRow[1, 3],
        controlsSubRow[1, 4],
        controlsSubRow[1, 4,1],
        controlsSubRow[1, 5]
        },
        Left
       ]
      ], Background -> GrayLevel[0.98]
     ]
    
    , "Output"], WindowSize -> All, Background -> RGBColor[1, 1, 0.9]
   ];




NotebookDirectory[]
