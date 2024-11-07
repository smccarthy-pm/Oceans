// ai-interface/ai-interface.module.ts
@NgModule({
    declarations: [
      AiChatComponent,
      MessageDisplayComponent,
      InputBarComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      SharedModule
    ]
  })
  export class AiInterfaceModule { }