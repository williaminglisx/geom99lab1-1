# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json
  ?destination=place_id:ChIJpTvG15DL1IkRd8S0KlBVNTI
  &origin=place_id:ChIJmy7QzkN51YkRCN4Ff03qIbQ
  &key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJmy7QzkN51YkRCN4Ff03qIbQ",
         "types" : [ "political", "sublocality", "sublocality_level_1" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJpTvG15DL1IkRd8S0KlBVNTI",
         "types" : [ "locality", "political" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 44.3579613,
               "lng" : -78.61323329999999
            },
            "southwest" : {
               "lat" : 43.6511725,
               "lng" : -79.38273819999999
            }
         },
         "copyrights" : "Map data ©2023 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "133 km",
                  "value" : 132847
               },
               "duration" : {
                  "text" : "1 hour 30 mins",
                  "value" : 5412
               },
               "end_address" : "Toronto, ON, Canada",
               "end_location" : {
                  "lat" : 43.6532377,
                  "lng" : -79.38273819999999
               },
               "start_address" : "Lindsay, Kawartha Lakes, ON, Canada",
               "start_location" : {
                  "lat" : 44.3568752,
                  "lng" : -78.7408959
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 417
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 89
                     },
                     "end_location" : {
                        "lat" : 44.3579478,
                        "lng" : -78.7358969
                     },
                     "html_instructions" : "Head \u003cb\u003eeast\u003c/b\u003e on \u003cb\u003eWellington St\u003c/b\u003e toward \u003cb\u003eCambridge St N\u003c/b\u003e",
                     "polyline" : {
                        "points" : "omvmGrar_NSyAm@_Ew@mFEWWqBCUEUU{AIo@Ko@G[AOAO@Q@_@"
                     },
                     "start_location" : {
                        "lat" : 44.3568752,
                        "lng" : -78.7408959
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.3 km",
                        "value" : 3340
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 307
                     },
                     "end_location" : {
                        "lat" : 44.329332,
                        "lng" : -78.723125
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eHwy 36B\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eLindsay St N\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Lindsay St N\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "etvmGjbq_Nt@Y|Ak@f@Q|@[z@]\\K|@]j@Sb@OZMfFgBjFiBrC_AdBm@lFiB\\Mj@S@A`A]lDkAdA_@jDmAbA]dBi@`Bm@`@OfBm@`@OjE{AxAg@bA_@bA]dBm@z@[rBu@bA_@`@OdBm@DAnCcAJCbA_@dA]`@OTKJC`@O`@OtAg@fC}@PGxAi@~CcAl@SxDoARIpAc@jDiAd@MdIiC`JmCZKj@QVKdBs@"
                     },
                     "start_location" : {
                        "lat" : 44.3579478,
                        "lng" : -78.7358969
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "31.0 km",
                        "value" : 30967
                     },
                     "duration" : {
                        "text" : "21 mins",
                        "value" : 1286
                     },
                     "end_location" : {
                        "lat" : 44.0633168,
                        "lng" : -78.624993
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eON-35 S\u003c/b\u003e",
                     "polyline" : {
                        "points" : "iaqmGnrn_NhE}AnAYXKjBg@lAa@BAhDqAvBs@z@[jAa@^MdBk@XI`Bi@~@[`EuAnEwA`EuAxE}AxDoAfEwAvCaA|G{B\\MlFeBvAe@pC}@jA_@XKb@M~Ai@f@QrC{@z@Y~Ai@f@QlDiAfFaBjAa@tDkA~Ai@zAe@z@Y|Ag@jAa@hA_@n@SxAe@p@UhA]BAhA_@zAe@pAc@HCJEJCTI|Ag@|Bu@JCnBo@LETIVIlAa@LCXKrC}@zBw@fCy@JCTIRGn@ULCzBu@JETI\\KvBs@pAa@`@OnAa@r@Wv@YZKXKf@QLE`@OTIz@Yv@WTIl@UjA_@|@[RIfBm@JCTIjDkAJEbA_@v@WtCaAv@Y`@OJChXiJfBm@PGdDiAdA]pGyBzBu@h@QfA_@jAa@x@Wf@ORG`@KVG`@In@Ml@Gz@I@?`@CVAZA|@AP?j@@X?`@Bb@Bd@D~@Jh@Jv@NfAVvA\\rAZvD`AlDz@lBd@b@J`@Jh@LrCp@`Dv@tBf@t@PXFH@^FB?b@D|@Ht@Fl@@r@@l@An@CLANA~@Gl@IPC`@GZG`@G`@Kj@QDA`Cu@|DmAvAa@`A[zC}@nDiAh@OtAa@vBq@|Ae@rC{@VIJC`@OvEwAfF}AlDgAdBi@TGLEbA[rGoB`@MNEzBq@hCw@`@MdA]`Be@vAe@lBk@HCbBi@`@M`@MdF{An@SdBi@b@Mx@UHCb@MdBi@r@UPGdGiBn@S`@MxBq@fDcAxAc@XIHC\\Kr@Up@UDALERIJEl@Wd@U^SBA`@UNIpAy@~@i@`Ak@dFiD~@k@f@]TMh@[`Am@~@k@v@e@FE@?~@k@^U~@k@`BaABC|EuCjAq@jC_BJI^SxBsAfAo@@A\\S`@W^U|@k@`@U`Am@DCVO`Am@|AaAJGTM`@U|AaAbAk@vA{@d@Y`@WPK`B}@NIp@_@n@Y`@SRIHEVKJGrCcAnBs@dA]`@O`@ObA]PGNGfC}@?Ab@OhC_AxDsAbGuBpIyCZMDApE_B~@]`@Od@Q\\KdBm@dA_@dBm@dBo@zAk@RIvBw@l@SHCtAg@f@QrBu@RIjDmAjBq@`EwAl@UjE}Ax@YpBu@fC}@lFmBr@WvBw@hDmA\\MhBq@zAi@jBq@^MbBo@hBo@ZMlAe@~@]v@YpAe@`@QhEaB~B}@jAe@fBq@nAg@RInBw@x@[nAe@xAi@jEcB`@O\\OfHmC|Ao@l@UdBq@ZM`@O`@ODAbAa@dA]VKXKPGzAk@HE|By@HENEpBw@TIPGbA]jAc@jAc@RGNGr@YlHmCd@QtBw@PGRGn@W`@OtAg@ZMhC_AfA_@VKtDoAn@U`A]vBo@f@MXI~@Un@O~@WZIb@EdAIz@Kt@If@Gj@GjBKD?h@C~@Cn@Cz@?^?b@@P@n@?D?b@B^@`AF|@HH@`BR~@LjAPdAP|@N|@PrARjARbAPr@LdARjARdAPnATnAR`APt@Lb@F|@L|@Lp@JnAPJ@P@^DxAJx@@jA?d@Av@CF?p@GZCp@K`@I\\Gj@Mf@MZIf@Qb@Q|@]pAe@`A_@`@OlAe@VKfBq@^MfC_AxAi@l@UxDyAfFmBn@Wl@Sn@Uv@WhDkAb@O`@OrAe@bA]TIzFqBnAc@zAg@fC}@nFmBbA]z@YpCcA`@MnFmB`@MzCgAp@UhBo@\\MvAi@n@Sz@[nBo@t@WtAe@pAi@NGbAa@`@QXMn@YvHcDl@Y|DaBdCeADAzAq@d@QdBu@`EgBhAg@`A_@JExAk@B?\\Mb@O`@OXKFC`Bi@BA`@O`@MdA]@A^Mp@Ur@UXKHCtBs@zAg@xAg@FAbA]JE|@YFCrAe@~Ag@tAe@tFkBHC`@O~@[zAg@tAg@t@U`Bk@BAfCy@l@Sx@Y`@O@?`@M`@O`@M`@O@?`A]b@M\\MB?bA_@`@MPGxBu@hBm@nAc@hBm@n@U`@Ot@W|@YLGf@Ob@OzAg@rAc@bA[dBm@l@Ux@W`@M\\MjC}@dA_@r@UPG`@MbA]BAzAg@zBu@RI`@Mt@Wp@UFCp@WhBu@lAg@ZMZMvD}AdEaBbCaA`@O?ArBy@fBs@vCgAx@WBAp@UZKtBo@PGl@Q~@Yt@UNEb@OZKjC}@nEyAbEoAJC|DoANEfBk@~Ai@zC_An@U|Ae@zAe@xAg@~@YhA]~@[l@Sn@Sl@S|@YlAa@n@SFAb@Od@ObA[`A[tGuBjCy@v@WTI|@Y|@W|@[`@MNGl@Q`@O\\KHCJETGPGZKVIBAd@On@S\\KPGJCXK^M`@K`@Kn@Oj@K`@Ip@Gd@El@EVCLAt@Af@AB?hA@`A@pA@^@J@v@@L?r@@dCBjB@fB@f@@v@?rA@dBBh@Bv@@bBHXBr@BrAHj@BnAFb@BlCN`CJlETH?dADbAFlAFR@p@DR@t@DlAFX@^BL?J?N?J?L?L?LALAB?PAJALCLAJCLCLCREJEBAHALE@ALELE\\QHCNIPIJGJEBATOFEVQTS"
                     },
                     "start_location" : {
                        "lat" : 44.329332,
                        "lng" : -78.723125
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 460
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 24
                     },
                     "end_location" : {
                        "lat" : 44.0597919,
                        "lng" : -78.62307349999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e at the fork, follow signs for \u003cb\u003eON-35\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-115\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eToronto\u003c/b\u003e",
                     "maneuver" : "fork-right",
                     "polyline" : {
                        "points" : "wb}kGdm{~MVGJIFGTUZ[@Ax@aAn@w@Z_@@AX]d@g@RSRU@?JIb@c@BA@A@AVSDEBCHEHG@?@ABA@AHEHCB?BAHCHAJ?H?H?F@D?B@B@F@JBFBB@@@HBJFBB`Ar@@?PE"
                     },
                     "start_location" : {
                        "lat" : 44.0633168,
                        "lng" : -78.624993
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.1 km",
                        "value" : 4061
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 159
                     },
                     "end_location" : {
                        "lat" : 44.0250383,
                        "lng" : -78.61375219999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eON-115 S\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-35 S\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ul|kGda{~Mb@Xh@Zh@ZRHVLl@Rj@RVFRFb@J`@Df@FVBP@T@J?\\@@?V?RAP?D?TARCTALAJATEPCVERELCFCTGRGRGRGBABALGVKRIPKRK@ARKPKNKBAROPMRMRORONKXSLKJGDERMROPMROPMRMNMROROPMRMPO@?PMROROPMPMRMROPONKBAROPMPMJGFGRMPMRMRMRMPKPKf@U@ATKRIPITIJCFCVIPGPEBATGTERETGRCPEBATEVERERETETGPC@?RGVEREVEPEBARETERERETEPEBARETGTERGVGPGVGTIRGNE@AVIRGTIDAJETGXKLETIjDkAJCRGf@QRGVKXILEBARGTIf@QTI|@YpAc@j@QJEHCnAc@j@QRGPGXKPGVIRGTIRGRIRGTITIRGTIRGRIRGVIRGRITIRGLEBAVKRGTIRGRGTIPG@ATGRIRGNGDARGRITIRGDANGPGVIRIVIPGPGVIRGRITGPGNG\\KRIRGRITGFCHCVIRITIPGTIRGDANETGRGh@MTETEFAJATETATCTARAXAP?T?V@R@V@T@RBRB\\DLBTDRDRFTFRFTHTHRHRFRJXLJDTJRJVJHDl@VFDb@PPFRHRFTFTFRFTDB@NBRDVDRBTBV@TBV?T@R?R?@?TAT?TANCTAB?j@IJAHCTERETETGPGTGTITGh@QTIPGVIDALERIVIPG\\KJEPGTI\\K"
                     },
                     "start_location" : {
                        "lat" : 44.0597919,
                        "lng" : -78.62307349999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 821
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 30
                     },
                     "end_location" : {
                        "lat" : 44.01999139999999,
                        "lng" : -78.61850849999999
                     },
                     "html_instructions" : "Take the exit toward \u003cb\u003eON-407 W\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "osukG|fy~MVHLEFCTE^IRGJCj@Mn@QRE`@IREPELCFAVCRCTAR?R?T@F@L@RBTFRDTHRHPJRJPNPLPNDDNPLNLPDFFJLTLTHPBBFRFLDNHXHXFZFZFZFZLt@F\\DZFZD\\DXFZF\\DZDXDV@D@NF\\Hh@Jv@Lx@DZHN"
                     },
                     "start_location" : {
                        "lat" : 44.0250383,
                        "lng" : -78.61375219999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "65.5 km",
                        "value" : 65518
                     },
                     "duration" : {
                        "text" : "34 mins",
                        "value" : 2021
                     },
                     "end_location" : {
                        "lat" : 43.8412115,
                        "lng" : -79.35549309999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eON-407 W\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "polyline" : {
                        "points" : "}stkGtdz~MJ|@F`@Hn@`@nCXlBRpA^fCBNDXDXF\\D\\@@DZDXF\\DXF`@DX@DBTF^DVDXF\\D\\FXDXF^DZF\\DVD\\Lv@FZDZFXF\\@HDPDXHZF\\DVHZDTBFNt@HZHZ@FDPFXHXHZHXFVHXJZFR@DHXDJBLJZHVHXJZJVHVHXJZHTJXJZHVHVJZHXJXJXHX`@jAHXDJDLFVJZJXJXt@|BRp@JXJX@DFTHVPf@Nb@@FFPHXFPN`@HXJX@DFPJZHVJZHXDJDLHVHXJXFP@FHVJZJZHTHXJXFP@DHXJXJXHVHZJVFR@DJXJZFTJZFPBFJZHTFP@FJXHVJ\\HVDLDHHXHVJZBHPf@HXJXJXBJNd@JZJXHXBDFRJXFTJV@FFPHT@DJXHVJZ@@FTJXHXFNBFHXJXHXHVDJDNJZHR@DPj@JZ@BFRJXHVTp@BFFTHTJ\\FNBFHXJXJXHVHVHXJXFP@DJZHVJZHVJXHVJXHXHV@@HVBHPj@HTJ\\L\\HVHVHX@@HVHVHTJZNb@DPJZHTJXFRL`@HVHVBDFRJZHVJZ?@HTJZJXHXJXDNBHHVJZFNBFJ\\HXHRBHDNJXJXHXHXJZ@BFRJXJXDNBHJXJZHVHV@@HXJVHXHV@BHVJZJXHXBDFPJZHVJ\\HTBHFPJXJXHXFRBDHVJXHX@B|@nCPh@Rj@Ph@FRHVL`@r@rBPh@Pj@Rh@b@pA?BRh@Pj@d@rAd@tAN`@Tr@z@nCJZDLt@`CJZDNJZh@`B?@J\\DLJ\\Vv@f@`BnBbG@BxAnEzAvEhAjDv@~BlB~FPj@Rj@DLb@rAVv@Tv@FNPj@DJJXPh@Pj@HVHPPj@L`@Pj@Rh@HXXz@Ph@Rj@^lABFPh@Rj@b@rAv@~BRj@Ph@v@~BPj@Rh@Ph@Rj@Ph@Ph@Rj@Ph@Pf@?@Pj@Rh@Pj@b@tAPj@b@tAd@tAb@tAb@tAVv@^fAb@tARj@b@tAPh@Ph@Rj@b@tAPh@d@tAFPZbAd@tAd@tAVv@ZhAPj@Nj@Pj@`@vA`@vA@Bp@~BNj@`@vANl@Lj@^xANl@Nj@Ll@Nl@Nj@\\xA@@h@fC?@ZxAfAbFd@tBDRJn@f@xCRnAHn@Hf@Jn@Hh@?DLl@Ll@BJJn@^lBD\\P~AP`Bd@jEHn@Fn@?@Fn@Hn@Db@Fn@@DFj@P~AFn@Hn@Fp@b@~D@FDh@N`BN`BL~AFp@Fn@\\bETpCFp@L`B^tFHz@NnB@LDp@Fn@@R@DDp@Fn@ZbETrCDn@Fp@L`B@FDf@Dn@\\bEDb@@LDn@LbBDn@L`B@PBZ@ZBZFv@DZ^pD@RFr@Ft@Fr@Dr@Ft@Fr@NfBFt@Dr@Fp@?@Ft@Fr@Fr@Dj@?FV|CLhBT|CV|CDr@@FXnEPnE@R\\~ITvFD`AJvDLnEL`ED|AD~AB\\r@nMZvFDb@Fn@Fn@R~BT`CNzAHt@Fn@Hp@BZ`ArHHn@@HdAnGHn@n@zD|@tET~@Lj@Lh@@B\\tA^vADJBJjAnENl@n@dCZjATv@Ph@Rj@b@tAPh@b@tAPj@Rh@h@pAf@pARh@pAbD^bA\\t@jBfElBdEPb@@DTf@N\\xBrFZr@~@vBj@nA\\x@JTl@lAj@nATd@Tf@`AtBTf@Tf@Td@Vf@`AtBTf@BDP^Tf@Tf@vA|CTf@Td@`AvB@Bh@hATf@Tf@Zr@LZz@|BRh@b@jArB|G@@r@jClBdJ^jBLx@F`@PhAn@tEHt@NtAR~BD\\BZB\\BZB\\@ZBZB\\@ZB\\B\\@Z@ZB\\@\\@Z@Z@\\@\\@Z?\\@\\@X?^@\\@Z?ZBz@?V?`@@^?Z?\\?T?F?\\?Z?\\?\\?ZA\\?\\?ZA\\?Z?^AZ?\\?\\A\\?h@A\\?Z?\\A\\?\\?ZA\\?Z?\\A\\?\\?ZAb@?P?VA^?b@A\\?\\?ZA\\?Z?\\AR?bACvA?x@Az@CpCCnDAfA?P?x@AZ?Z?z@?x@?vA?z@@x@@z@Bx@@x@Bz@Bx@Bv@Bh@FjADx@@ZB\\BZ@\\BZBZB\\Ft@Fz@LlA?BJ~@Dd@BTBTDZDZJz@PpAJx@R|A`@|CVnBHl@f@vD@PF\\DXDb@PrAJv@Hv@DZB\\BZHx@LbBHtA@`@@P?FDhA@Z@P@d@@\\?\\@\\?f@@Z?\\?Z?\\?\\?\\AZ?\\A\\?ZAj@Al@Cr@Ev@?DA\\C\\AZC\\CZALANAZCZE\\CZCZE`@Gl@Gb@CZEZEZEZEZGXAJAHG\\G\\UpAG\\Ov@_@`BK`@Qr@Qt@Sr@Ur@Sp@Sr@W|@CJSn@[dAOh@IVg@dBSr@KZGRgAtDeAnDAHQh@Ux@Sp@Sr@Sr@KXIVIXIXIXIXIXSp@Ur@Sr@Sr@Sp@Sr@Sr@Ur@Sp@Sr@Sr@IVSr@IXIXKXSp@Mf@Od@Sp@IXIXUt@GVKXGVKXIXIXIXIXIXKZGTIVKZSr@Sp@Sr@Sr@IXITSt@s@`CeAnDK\\IXIXIXIXIVK\\ITIX?@IVIXIXIXIXIXIVIXENCHUr@GVKXIZIVIXIX?@IVIXIXIVIZIVKXIXIXIXIXIXIVIXIXIXIXIVKXIXIXIXIXIXIXIXIVIXIXIXKXIXIVIXIXIXIXIXIXIXIVKZIVIXIXIXIVIZSp@IXIXKZIXIVIXIXIVIZIVIXIXIXIXKVIXIXIXIXIXIXIVIXIXIXKXGVKZIXIXIXIVIXIXIXIXIXKVIXIZIVIXIXIXIXIVIXIXIXi@fBIXIVIXKZGVIXIXKXIXIXIVIZIVIXIXIXIXIXIVKZIXGVA?GXKXIXIVIX?@ITIZIXIXGRADKZIVIXIXABGRIVIZGTA@IXIZGVGVABIZGVIZGXGZIXGZERI`@EZGXG\\Mt@G\\EVE\\EZEZEZE\\EZCZE\\CXEZC\\CV?@E^AXE^?DATC\\CZAZC\\A\\AZA\\AZAP?JA\\AZA\\?ZA\\?\\?\\AX?^?\\?\\?Z@^?X?\\@\\?T@F@t@?B@^@Z@Z?@@ZBZ@\\B\\@ZB\\BZ@\\BZB\\BXD\\@N@LBZD\\BXHr@DZD\\DZD\\DXD\\DZFZDZFZFZ@NBJFZFZFZFZFZFZFXDT@DHZDVH\\BPFXH\\FXFXFZFZFZFXFZFZHZFXFZFZFZFXFZHZHb@DPFZFZFZFXFZFZHZDR@FFXFZFXFZFZHZFXFXF\\FZFXFZH\\DVHZFZFZFZFXFZFZFXHZFZFZFXFZFXH\\FXFZFZFXFZFZFXFZHZDXHZFZFZFZFXFZHZFXFZFZFZFXFZFZHZFXFZFZFXFZFZFZFXHZFZFZFXFXBLBLFZFZHZFXFZFZFXFZFZFZFXHZFZFXFZFZFXLp@H^HZFZFXFXF\\FXFZFZHZFXFZFZFXFZFZFXFZHZFZFXFZFZFTF^FZHZFXFZFZFXFZFZFXHZFZFZFXFZFXHZFZFZHXDT@DFXHXFZFXHZDP@FHZFZHXFXHZFXHXHZFXHZFXHZHXHXFXHZHX@FFPFZHXHXHXHZHXHXHXHXHZHXFVJZHXHXHXHZHVHXHXJXHXHXHXJZHVHXHXJXHXJXHVHXJXHXJXHTJZHXJVJZHVNb@DLl@dBHVJVJXHVJXJXJXJVJVJX@DFPJXFNBFJVJVJXJVJVJXJVJVJVJXJVLVJVJXJVJVJVDJFJJVJXNZHPJVJVLVJVLVJVJTLXNZHPJVLVJVLTJVLVLXJRLVLVJVLTJTLVLVJVLTLVLTLVJRLXLVFJDHLTLVLTLTJTLVLRLVLVLTLTLT?@LTFLDFLVJTLTLVNVJRLVLTLVLTLTLVLTJTLVLTLTLVLTLVLTLTLTLVLTJTLVLTLTLVDFFLLTLVLTJP@BLVJTNVJTJR@@NVJTLTLTLVLTLVJTNTLVJRLVLVLTLVLTLTLVLTJR\\n@Xl@LTLTLVLTDFFNLTLTLVLTLTLVJTJP@BLVDHFJLT@BJRLTLTLVLTLTZl@JTHLBFLVLTLTLVLTLVLTLTLTLVJTLVLTLVLTLTLVJRNXJRDFHPJPLVNXJRLVDDFNLTLVJRNVLTLVLVJR@@JTLTLTLTFJDJLVLTLVJPNXJTLTNXVd@Vh@R^LTJTJR@BHLP\\LVLTHNLTLTLVJR@@LVFLDFLTLVLV@@JRLVFLDFJTJRBBLTDJDHNXLTLTLVJTLTLVLTLVNTJVNVJTLVHJBHLTLVBFFLLVHR@BLTJVLVJVJVLXJTJXJVJVJX@@HTJVJXJXTp@Tp@BHPh@HV@@p@~B@@FVRp@H\\HXPp@?BRr@DTJ^Nt@FTH^Nv@BLJf@DTH`@Lt@DVH^DZJj@Ff@Jn@@HLv@DZLhA@HD\\Jz@BPDd@Hv@Hz@Hv@Fx@Hz@Hv@@JDl@Hz@BZJz@Fv@Fp@@DFx@Hz@Hx@Ft@H|@Ht@D`@@THx@Dh@BLH|@Ft@B`@Hx@@TBVF~@Fv@Fx@HxA@XB^@\\B\\@NDz@Bh@@\\Bz@Dx@Bz@@\\@|@DdA@fA@^@\\?`@@v@@j@@bC?`A?r@?F?z@?Z?^?v@A~@Ax@Av@?`@A\\?\\Cz@Ah@?PCv@AXC|@AVCbACp@E|@C`@Ct@Et@?JCVA\\C\\G~@CZEz@KrAG~@Ix@Gt@I|@ANEj@Iv@CRAHIx@It@K~@CPAFIt@G^CVM|@ADIn@Kv@Gb@Kr@GZKx@GZG^Mx@Gd@Ij@CPCJEVE\\GZE\\CRADG\\EZCRAFG\\EZEZGZEZg@jDAFKp@Mv@AFKp@Kv@Mv@E\\Mv@Mv@Kv@G\\Kv@?@Kv@G\\E\\EZ?@It@Kx@AJAREZC\\EZGx@E\\?BCXCZ?@CZEj@ALGx@E|@Et@E|@E|@Cx@A\\A\\A\\A\\AH?RCz@?\\AZA~@Ax@?x@?z@?|@?j@?J?h@@R?\\?\\@h@?N@z@?\\@\\@z@@x@?x@@z@@x@@z@?R@d@?h@?P@z@@z@@x@@z@@x@?z@@D?t@@R?d@@n@?J@h@?P?n@@H?z@@x@?H@p@@z@@x@?NBlCB`BB|CBrDFnFB|C@vA?D@j@@bBD|EF`FBxC@`B@r@BvDBhCBvA@xA@rA@`@BxC@v@BrC@x@@|@?Z?@@X@z@@\\@p@@b@@^Bx@Bp@?HBx@Bx@B\\@\\Dx@Dx@@\\BZ@^HtAFx@B^B\\@XHz@Bf@JlAFx@Hv@BZD`@Ht@Hz@DNh@vEh@zDTbBh@pD`@tCZvBTxAPfAL`A`@pC@FVbBXtBF\\XlB`@pC`@vCRrAZnBHj@D`@TzAN|@d@hDJl@d@`DVbBT~AVdBL|@PjAXpBf@hDf@fDPrAZrBZtB^fCNjALz@F\\Jt@b@vCxAdKJh@Hn@NbAd@bDZtBF\\T|Aj@zDT~ARvAPjAPjAT|AFb@^dCBT?@?@TxALz@F^T~AHh@Hh@@LFXBPT~ABPDZPfABVLx@Hf@j@xDBTPhAT~ADVd@bDb@xC^bCHn@n@hEFb@@JHb@b@xCPpAJn@RzALv@RpAVdBh@tDJp@L~@TxARpATvALr@Nv@Lp@Nx@Nz@Nn@Pz@Pz@Np@Pv@Pv@Rx@Rv@XjARv@Lb@Rx@X~@HXNf@Tt@Tx@Tp@Tt@Z~@FNl@dBNd@Pb@b@jA`@hAVr@Rh@f@pAzAfE|AfEpAlDb@jATn@Vr@Vp@`@fAb@jAl@bB`@hAx@xBXp@JXb@dA@@p@|ABDr@zA@@b@z@NXXf@^n@@Bd@v@Xd@T^\\f@PVPVX`@NRNR@@\\b@PTFHd@j@PRZ^v@|@v@v@~@`AtAtARR@@@@d@b@VVfAhAXXVX`A`A\\\\dCfCVV\\\\ZZvAvAZ\\`A~@dAfAb@b@lBlBPNb@d@~@|@hBhB~A`BvAvAZZhAhA`@b@`@`@LLf@f@b@b@DFB@XX@@VVd@d@xAzAn@n@|@`AVXpAzAZ^TZTXNRV\\^f@PXh@v@j@|@z@|A`AhBnB~Dh@rA^|@N`@Vp@Tn@^dAFPb@tAl@zBf@nBVdAL`@Ln@^jB@@Lp@VvAPdAT`BN~@XpBJx@VfBT`BPlAJv@VjBF\\TbBHh@@D^lCNfADXLv@DV\\bCXpBHb@VfBXpBVfBFd@Jp@PlA@LZrBT`BHd@Hj@f@pDRnAVfBJv@Lz@T~AHh@~@rGl@hE^fCJv@RpAPnA\\dC@HRpAb@zCHf@VdBNbAL|@DZXnBJn@BPPnANfAPpATxAp@zERrAXjBZ~Bx@vFRnAPpATxANhAj@|Dj@xD@J~@rGRvA|AlKdApHL|@ZtB\\|B^dCf@jDR|AF`@N~@PrABJL~@N|@VjBXnBJn@NbAT~An@lE@H^fC@FrAfJr@~E`@vCf@lDHh@Hf@Fb@VbBXxBZrBBRbA`HdBpLnAzIpAxIrCzRz@~Ff@pDr@tEDRHd@?D?JVtAb@tBVfA^zAXdAFVJZHXHVHX@DFPTr@Tn@HXJVJVHXJVJVJVJVJVJVLVJVJVLTJVLTJTLVLTJVLTLTLTLTLRLVLRDHHJLTLRNTHLDH\\f@l@z@^f@\\d@^d@NPPR^d@`@b@NPNPPP`@`@NNPPb@`@n@j@f@`@b@^b@\\j@d@bBrANJ~@t@n@d@RPn@f@@@b@Zx@j@FFz@n@~BbBvBbBhEfD^Xh@d@tAdAdCnBxAhA~AnAdAz@TRRNPRPJl@h@HHFD\\\\RRTTh@h@\\^RT`@b@PR@?|@fADFV\\p@x@^f@`@j@V^HNLNd@r@\\j@f@v@Zj@`@r@@?NX^r@\\p@LVHL^v@Vh@P^HRNZRd@P`@JXLXf@nAf@vAJVPj@N`@DNJXHXJVRr@HXHXJXHXFXHXHZHVHZFXHZFXRt@FXFZFZHX@JDNFZFZFZFX?@FZH`@DXF\\DXFZD\\FZDZ@DBTFZDZDZD\\DZDZF\\DZDZD\\Jv@D\\DZDZD\\DZDZD\\Fd@DPD\\Jv@D\\DZDZD\\DZDZD\\DZDZF\\DZD\\DZDZD\\DZDZDZD\\DZDZD\\DZDZD\\DZDZDZD\\DZXpBDZDZD\\DZDZD\\DXD\\DZDZDZDZD\\DZF\\Fh@BLDZDZDZD\\DZDZDZD\\DZDZDZDZLx@DZD\\DXD\\DZDZD\\DZDZDZDZBT@FDZDZDZD\\DZDZDXD^FZDZDZD\\DZDZDZDZJx@DZD\\b@hD^nCb@hD\\jCd@lDbBtMvAzKPrAJx@PnA|@dHVlBJv@PtARtAn@~ED\\Jl@@JDXD\\F\\DZDZDZ?@Lv@T`BHf@Lz@Lv@DZFZJv@FZLt@D\\Lv@Nx@Lt@Fb@Lp@RpAFZTrATrA^lBF\\DXFXNv@Lv@FZFZb@vBBPNt@\\dBb@vBFVFZFZNt@Nr@b@nBXpA`@jB|@~D`@dBLh@Lj@Pr@Rt@FZFVBFDR^zAj@vBPt@Rr@VbAj@tBtAjFPn@^nA\\nARp@Lf@ZbAJZ\\jA\\jAJZRr@^lA^jAx@lCpA~Dh@hB`@lA^lAb@tATt@HXTp@HXFRJXFVTp@JXHXHXTr@FVJXRr@DPL`@HVFVZfAf@rBHXPt@Nr@HZFZNr@Pt@Nt@FXFZNt@FZNt@TpAFZLv@Nv@DX@HDPDZDZFZDZDZFZJt@D^DZDXDZDZD\\DXD\\DZB\\@?BZDXBZD\\BZDZ?DBVDZHx@@L`ArJFh@RnBRpBPvAXjCJx@BZHv@Jv@LhAb@rDD\\Jv@t@|FJv@RtAPpAJx@Jx@RnADZJx@Fb@NdArAfJrAjJHd@DZDXD\\?@DXFXDZ@DBVDXDR@FD\\DZ?@DVF\\DZDVD\\F\\DZDXDZDZFZDZD\\DX@@DZDZDZFZDZDXD\\FZD\\DXD\\DXFXD\\DXF\\DZDZDZBP@FDZF\\DX@JBPFZDX@LBNDZDXDX@@D\\DXF\\BVF\\DZD\\FZDVD\\Lv@D\\DZDXDZ@@DZDXD\\DV@@DZD^F\\BTFZBR@FDZF\\BVHd@BTF\\BTF\\DZDZF\\DZJp@?BF\\DZJt@DZFZD\\Jt@FZDZDZDZFZDXD\\DZDZF\\DXDZDZDZFZDXD\\DZXpBFXDZDZ@BBVF\\DXD\\BJBNDXDZDXF\\D\\DTF`@DZDXDZDZDXF\\DZDZFZBR@FDXD\\@BDVDZBP@HDVF^DZD\\DXF\\DZDXDZDZ@?DZD\\DXFZ@LBNDXDZF\\DXDV?BD\\FXDZD\\DX@DBTF\\DZDXDZFZD\\DXF\\DX?BDVD\\DXDR@FDZDZBN@JFZD\\DXDZF\\DXDZD\\DVF^DVDZD\\@?DZDZDZ@BBTFZDZDZ?BFXDXD\\DZDXF^BVFZD\\DZD\\DXFZDZ@LBJDZD\\BR@FF\\D\\BR@DD\\DX?@DXDZBNFf@Jv@DXD\\DZD\\DXDZDZ@BBXDXD\\D\\DXDZDZDT?BD\\D\\DXD\\DVD\\?BDVD\\DZBZDZ@HBPDZDXD^BZDZDZ@HBPD\\DZBZDZDZNlADb@D\\DXD\\@NBJB\\DXDZBXF^BXD^DXBZD\\D\\DZBXD\\DZDZBZDXDZD^?BBTD\\DXBZD^DV@FHt@BXDZD\\BXBN@LDZBXDX?DDZDZD\\BXD\\Jx@BZDXDZB\\DXD\\D\\BX@DBVDZDZB\\DXD\\@J@ND\\DZBZDZBZD^?BBVDXBZD\\BZBXD^BXD`@BXBZB\\D\\BXB\\B\\BXD\\BZBZ@PDh@BZBZ?@B\\BVB\\B\\B\\@\\BXB^BX@P?HJzABZ@XB\\BX@^B\\BZB\\@X@B@ZBZBZ@T@H@\\Dh@Dn@Dr@D^BZB\\B\\@XD\\B`@@RD^BZB\\BZB\\@N@LBXD\\BXB^DZ@L@PBXD\\BXB\\BZD^BXB^BXBZD\\@J@NBZBZD^?BBTBZB\\BT@DB^DZ@T@DBZB\\@HBPB\\BT"
                     },
                     "start_location" : {
                        "lat" : 44.01999139999999,
                        "lng" : -78.61850849999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "10.3 km",
                        "value" : 10292
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 387
                     },
                     "end_location" : {
                        "lat" : 43.7683954,
                        "lng" : -79.33887779999999
                     },
                     "html_instructions" : "Take the exit onto \u003cb\u003eON-404 S\u003c/b\u003e toward \u003cb\u003eToronto\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "qvqjGxbjcNOj@?@@NFr@@H@PDx@Dl@Dx@Bd@@H@V@V@T@T@RBl@@h@@Z@|@?BAdAAnAATErAIxCElA?RC|@Cj@BP?B?LAzB@b@@X?BBZ@THx@DVBTBP@JBL@FBLBNBLBL@D@FBJBH@FBHBHBHDLTt@JZN^HPb@|@LVZr@P`@?@FLHVJZJ\\FZFVF`@F\\D\\Hv@Fn@NbBHt@Fv@Fp@BVBXFx@JdBHhABp@?^?F?NAXEZKZABENKRIJABA?A@MJMHKDGBI@G@Q?I?E?IAMEIEOGGGIIEEGIGKIOGWGUAOAAAU?W?Q@SBQDUFS@EHSJUHKHQJOJOFG@CJMJOJKHINOLMXWXUZSx@e@p@[~CmAfBq@pCgANIhAc@|@]nAe@n@Wl@UTEf@Sh@SHCp@YVId@QLYb@Mf@Qv@Wd@MBAt@UPGf@ONGz@Wx@UBA`@Od@Md@Of@Od@O^KDCd@Od@Md@ORIRGf@ONGx@U?ARGd@ORGj@QLEd@Op@UPGHC\\Kd@Ol@Uf@QRGRIRGLEDCRGRIRGPGNGVIRGTIPGt@UXITGRGVIZKFANEDATILEDATGRINEXI|@Yh@ORGTIRGRG@?RGRITGLEDCTGRGRITGRGRINEDCRGTGRGRI@?RGRGTINEBARGTIRGNGXINERIRG@?RGTIRGXKNEBATIRGTGRGTIRGRITIRGTIRGDCLERGTIRIRINGDARKRKLGDC`@SDCRKLIBCRMLIRMBCPMROPOLKBCROPOTW\\[POPS?ANQPQNSNQ`AqALUZc@LUNULULWLULWLWJWLWLWJWJWJYJYJUJ[HWJ[HYHYJYHYHYJYHYpAmEJ[HWv@iCHYJ[FYJYHYH[JWH[BEDSJYHYHYBGDQJ[HYTq@L[HWL[JULYJUJQLWLUNULSNULQ`@i@RSNQPSNMNOTSPOROPMj@_@LIRKTKBANIRITITIRGTGRGRETETETEDALAVERCj@ILCZETCTERCVCRCTENCNApBYTCRCTETCTETCTCRETCTETCTCTETCRCTETCTCTE~@MTCDANCTCTCRETCZENCTC`AMh@ITCTETCTCTEh@ITCTCTETCTCPEB?RCTETCTCTETCTCDANCRCTETCTCDAd@Gh@ITCTCREVCRETCTCTERCTCRCRETCRCTERCTCRCTERCRCTCRETCRCTERCRCTCRETCRCTCRERCTCRETCfAO^ERCTERCTCRCRETCRCTERCRCTCRETCRCTETCTETCRCTED?NCTCRE@?n@Ij@ILATETCTCTETCRETCTCTEXENATETCRED?TENATERCTC~@MTETCRCTETCTCRETCTCRETCTCRETCTC\\EBE@A@A?A@?PC`@GRCTCTERC@?RETCj@IRCTEB?PCTERCTCRCVEh@ITCTC^GHAj@I~@M~@MTCj@INCn@Ij@Ib@GD?ZENCTE\\E^Ej@If@GTETCtASf@GTCRETCTCTERCTCTCRETCRCTCTCh@Gh@EVCPCTATCTATCFAL?RCTATCh@ETATCTARCTARARCj@Eh@Ej@ETARAjBOB?NCTARCTCRCVC|@Kj@GZELCRCTETCRCTCh@ID?LCTCTEh@Gh@ID?NCRCTETCFAJATCTCRCTCBAd@Ej@ERCH?HAVAh@ATAN?Z?h@Aj@?L?p@Ah@?@?h@?~@CT?t@An@E@?L?FATA"
                     },
                     "start_location" : {
                        "lat" : 43.8412115,
                        "lng" : -79.35549309999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "14.0 km",
                        "value" : 14038
                     },
                     "duration" : {
                        "text" : "11 mins",
                        "value" : 650
                     },
                     "end_location" : {
                        "lat" : 43.6590706,
                        "lng" : -79.3543023
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eDon Valley Pkwy S\u003c/b\u003e",
                     "polyline" : {
                        "points" : "oocjG~zfcN^Cl@Gh@Gb@EDAh@Gh@Kh@KREREf@MPETGv@UVIn@SLEh@QpAc@h@QJEZKNEXK\\KJEf@O\\KJEVGPEf@OhAU\\EXENCp@K^GDALCHAPC`@Gl@K`@G\\G`@GNC`BWhAO~@OdCa@hC_@f@Ih@Il@KPCn@MPE\\Gn@O\\I^Kj@On@Q\\KNE\\KDAFCPELENEPELENENELC@?LENENENENCNELCPELENCDAHC^GNELCNCNENCNCNCNENCNCLCPCLCNCPALCNCNCNC^E^ENCTCPCNA`@ENCPANANCPANANCPANANAD?JANANAPANANAPAN?DAH?NAPAN?NANAP?NANAP?NAD?HAP?^Cf@A\\Gp@Cr@C`@ARAPAb@ANAPAVCTA\\CHAJATCd@Gb@GTCd@Gv@MB?dAQRCd@Ip@MtB[d@IB?fBYREXEz@Mb@IXCVCz@Kl@Ed@Ch@CJ?NAL?\\A|@AvA?`B@d@?h@?l@@tA?~C@n@?`@AP?X?b@C`@AVAXATCRAb@EdBOz@MXCbC]ZEjAO^GJATEb@GjBWhAOTCLCTCZEj@Ih@GRCNAJC^Cl@GVCRCNC\\CnAKjCWp@Gl@GVCdAK|@GF?`@ANAL?@?^AN?NAN?P?LAN?P?PAL?R?LAN?N?^Ar@AF?DA`AAjACz@Az@AbBCVA~@AH?d@ANARAL?NAXADAVAFANA^CPCNAf@GVEDAXCNCNCBAZGD?JC\\GBAJC^INCLE`@KPENEPGZKNELE@?LE\\MNGPGh@SNINGLGNGLGl@YLGLINGHGLCZQl@_@BA\\ULGPKXSn@g@FENMTQRMZWdAy@v@k@f@a@v@k@POHG\\WROd@]ZUBA^UVQBAn@[h@UPEFCLCZI\\G@Af@GPCXAJAD?PANAN?N?P@L?N@P@L@H@VB^D@@J@ZFr@RFBx@^d@TXNZTNLd@^|@|@FHDFX\\NPp@`AFJPVPVz@pAZd@Zd@JPNRXd@NRz@pAd@r@x@hA`@d@PTPPNLDFB@LLLJHHZRLJNHLHLFJFJDFDHDVHLFLDRFRDRFNBNDJ@JBVDTBTD`ALH@t@HnBVhBTRB`@FZDPDNBNBZHNBHBFBTFNFJBFDFBVJXPRJRLXRXTLJBBHHTTHJDDPRNPLPLRJNFL@BRZBFLVJRHPPd@JXHT@@FRHVL`@J^FRt@tCFPLd@L`@L`@J`@Pd@HVFPFPJVFNBFBDN\\NVBHFJNVLTHNx@jAh@t@f@t@j@v@j@z@\\f@LTLPNZBBJRBFFLLVJTNd@FNBJDLDJDPFTBHDRJb@BJBHBNF\\Fb@@JBVD^BZ@F@N@T@TBh@?R@V?Z?d@?L?^A`@?HCd@AZARAPAPCV?BKrAANOzAEp@MvAKvAGl@ALEf@ANALC\\El@?JAPATCt@Ad@?V?N?b@?Z@Z@V@V@X@VBP?JBVDXBTBV@DDZBPFXJh@DTJb@HXDP@DFPL\\HVBBBJJTNZNXHPLRFJJPPVNRLRJLV\\X^xAhBbBrBbApA~@hAzBpChC~CLPVXnA`BVZLNJLJJTVLNLLJLVVPNJLFFFDRPTRHHFDTRTNNJLJZRNJJH\\RPJ`@TPJD@PJRJTHDBNF\\LRH@@XJ^L`@L@?\\JPDRFLBNBHBD@NBNBJ@JBXDD?LBXDH@l@FN@P@`@BX@t@@V@fBB`@@R?H?L@L?L@^BPB@?L@L@LBRBPDTDJBXHVFr@T|@\\ND\\Nr@Vh@T`@NVJLDj@RXJXJJDRFHBNDb@HLBJBNBXBJ@ZB\\B`@?N?P?`@AN?VA\\CF?j@Eb@CnAG|AIXA^C~AINA^CXCd@ENA\\Eb@G\\ERCXE\\G^Gh@KVEZG`@Ih@MlAUbAU^INERENEPGRE\\M^MXMNG\\ONGXO\\QTORKXQBCZSf@_@ZUTQPOd@c@XWXULMLKRSXWt@q@\\[HIXU`@a@@AXUNO^[BAj@c@BCTOTOd@WVODCJETKTIZKDCTIPEFABA^K^IDAf@Kd@Ir@OXGTEPEHAXGNCNC^I^Ib@IDAVE`@IREZGVGl@MjFcAJC^Gv@OPExCm@D?VGf@KjAURITGJCNCNEJCB?LCVGHALENC~@SNCNCNENCDAHANCNENCNCNCNCLCNEPCLCNCHADATE^GDARE^GPCJC@ALCLA?A\\GNETG"
                     },
                     "start_location" : {
                        "lat" : 43.7683954,
                        "lng" : -79.33887779999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 384
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 25
                     },
                     "end_location" : {
                        "lat" : 43.6560606,
                        "lng" : -79.3543313
                     },
                     "html_instructions" : "Take exit \u003cb\u003e1\u003c/b\u003e toward \u003cb\u003eRichmond St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eDowntown\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "edniGj{icNHJ@?@?VGTEHAVGHCPGNEDCTIPILGTMVOXS@?^Y@AZUDCHGJGB?BAFADABAD?H?B?D?B?D@F@D@@?@@B@FBHDDBHDHF@@@@DBDFFFHNFHHJDFBFBDDLFNFNDJ@BBB@@BBD@"
                     },
                     "start_location" : {
                        "lat" : 43.6590706,
                        "lng" : -79.3543023
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 136
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 9
                     },
                     "end_location" : {
                        "lat" : 43.655422,
                        "lng" : -79.3557761
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eEastern Ave\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "kqmiGp{icNFTDNJ\\\\~@^dABFL^Tn@"
                     },
                     "start_location" : {
                        "lat" : 43.6560606,
                        "lng" : -79.3543313
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.1 km",
                        "value" : 2138
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 344
                     },
                     "end_location" : {
                        "lat" : 43.6511725,
                        "lng" : -79.3813012
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRichmond St E\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "kmmiGrdjcNDZDPH`@BJ@F@BDRBFBLDTDV?@DT@F@L@BD^@L@TBX?D@`@@H?X?J?P?RAb@?JAJA`@AB?LCXC^ABEv@Gt@KzACpAA~@@`@DbA@XD^D^BRBTBNJj@F^BPPbALn@VdBT`BNfABP?@Hj@Jp@?BNfARfAZxBRtANbAHn@Lz@RpAVjBXrBTbBFZ^rCF`@h@rDRvAB^@@@N@VAXAPIl@CHAFAH?@AHAPCb@AZAN?J@n@jAfIPrAT~AHj@VrBXvB`@xCPtAXpBL|@Jp@VxB@@LdAJn@"
                     },
                     "start_location" : {
                        "lat" : 43.655422,
                        "lng" : -79.3557761
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 275
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 81
                     },
                     "end_location" : {
                        "lat" : 43.6532377,
                        "lng" : -79.38273819999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBay St.\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yrliGbdocNyBn@C@ABCBA@ABABADABAFIb@CLCLAHCHADABADCBABEDCDIDu@Tk@H{@Tw@T"
                     },
                     "start_location" : {
                        "lat" : 43.6511725,
                        "lng" : -79.3813012
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "omvmGrar_NwDyW_@kC?a@v@y@~FwBjDmA``@yMnl@mSd[_L`eBgk@pwByr@nbCqx@hYsJnHcBnGQnJlAxg@xLdJRpG{@fk@aQht@wTv}@_Ydy@}f@dWqOxVsKzvAig@r}Aqk@n}@{\\|h@eRvJoB`Ly@zGB|MzAb`@pG~Kt@dHo@l\\oLj`Bik@`m@}VlRaHd{@kYjw@wWt`Ay]fpAia@lSsG`OmDjXBxc@vA|VhAjEi@|EiC|IcJbCeBnBJxK~EvEb@dCIbGyAnGaEtO}KjHcDxGsAnQsEtp@sT`SmGdIOjIbCfIpCrHJzQsEvJaBrCj@~BlBnC|HrB`NbH|d@|FrYxTlr@bQli@lf@zzAzr@zwBlX~y@vKf^`Kfc@zEhZbEf`@jJrkArGlz@rF|oAtBnWrDjX~ExUxEhQvRzf@fa@n}@`CnGvGpWdDrVt@nMNj\\]~d@Hd^vAtTrEl^jBdV@vNs@|M{BrOcIvYaRfo@wXb`A_h@xfBcG`XcBdYx@nYtEtYdO~t@nOxu@vOrr@~Tzq@|Wlk@`Yvi@bq@fqAzJnUlEfPtCjPrF|k@zAjUh@lZqAti@eG~h@sGvc@mCn_@Hrf@x@p~@xAvmA|AvVnItn@dVfbBpP`jApRlqAbHlZpMl_@fRdg@jJ`Pfd@pe@rXvX~NfPtJ~PrEbMxDbPbDtTbGdb@lGrc@bVxbBp[zyBzVxeBvCtPlBfHlEpLlElIhJbMlR~Ojc@|\\fJ|IzLlQtIxRvHbZbExYdLp|@|[jdCjNjv@hJp`@nMpd@rS`s@`Hlb@|LxfAnJvp@xJ|q@hLpx@dUf`BfSrhBlFbv@~@vK\\|DFzDn@bLUpXn@vLfCtHdBnEfA|I~@zLQ~Do@`AuAVqAw@g@iCj@qClAgBbCuB|SuI`PmG~NoEdYgJrc@eNrPeGbGuEfHcKtMea@rDkKjGuHpH}CrImA`XmDnj@oHf}A{Srq@{G~Hw@tOSlL_BjO{E`h@sIdQqE`QgChOs@nLu@~TiDzGk@bKCdMAbIo@bTsCzSqB~[m@bIi@pGoA`HgCfIyEnMuJ|DiB`Dc@pHn@rElC`EdFbMhQ|ErCfP`C`HlBnFnFpEtMhDtJpJ`OxBfHl@jKwBl`@r@dJzC~It_@be@dHxEbH`CzGx@vK^jNrElIrAbR}@|PsCpJqD|KgJ`IaGbJ_Ctb@sInOsCdEk@lGaDbBQjBdBlC`H~AxG\\jGi@nRhL`y@lApKWxBGzAtBjPbDhVr@pFcCx@YlAUx@iF|A"
         },
         "summary" : "ON-407 W",
         "warnings" : [],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
